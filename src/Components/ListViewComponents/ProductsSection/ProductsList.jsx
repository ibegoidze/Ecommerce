import React, { useEffect, useState } from "react";
import "./ProductsList.scss";
import { useSearchParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Store/Cart/Cart";

const ProductsList = ({ currentProducts }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  let data = currentProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="PLmain">
      <div className="PLcontainer">
        <div className="PLbox">
          {data.map((item) => (
            <li key={item.id}>
              <div className="PLimg">
                <Link to={`/Detail/${item.id}`}>
                  <img src={item.images} alt="product image" />
                </Link>
              </div>
              <div className="PLpriceDescription">
                <Link to={`/Detail/${item.id}`}>
                  <div className="PLitemName">{item.model}</div>
                </Link>
                <div className="PLprice">${item.price}</div>
                <div className="PLraitings">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="15"
                    viewBox="0 0 80 15"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z"
                      fill="#D5CDC5"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z"
                      fill="#FF9017"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z"
                      fill="#FF9017"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z"
                      fill="#FF9017"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z"
                      fill="#FF9017"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                  >
                    <circle cx="3" cy="3" r="3" fill="#DEE2E7" />
                  </svg>
                  <span>7.5</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                  >
                    <circle cx="3" cy="3" r="3" fill="#DEE2E7" />
                  </svg>
                  <p>
                    {Math.floor(Math.random() * (350 - 100 + 1)) + 100} orders
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                  >
                    <circle cx="3" cy="3" r="3" fill="#DEE2E7" />
                  </svg>
                  <h5>Free Shipping</h5>
                </div>
                <div className="PLdescription">
                  {item.description.slice(0, 190)}
                  <Link to={`/Detail/${item.id}`}>
                    <span>...see more</span>
                  </Link>
                </div>
                <Link to={`/Detail/${item.id}`}>
                  <div className="PLviewDetails">View details</div>
                </Link>
              </div>
              <button onClick={() => dispatch(addToCart(item))} id="addtocart">
                add to cart
              </button>
            </li>
          ))}
        </div>
      </div>
      <div className="PLpageButtonsContainer">
        {Array.from({
          length: Math.ceil(currentProducts.length / productsPerPage),
        }).map((_, index) => (
          <div key={Math.random()}>
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

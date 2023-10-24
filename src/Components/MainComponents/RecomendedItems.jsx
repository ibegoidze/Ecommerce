import React from "react";
import "./RecomendedItems.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../../Store/Products/index";
import { Link, useSearchParams } from "react-router-dom";

const RecomendedItems = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const { products } = useSelector((state) => state.products);

  let asyncParams = {
    category: params.category,
    priceFrom: params.priceFrom,
    priceTo: params.priceTo,
  };
  useEffect(() => {
    dispatch(productsData(asyncParams));
  }, [dispatch]);

  return (
    <div className="RImain">
      <div className="RIcontainer">
        <div className="RIbox">
          {products.map((item, index) => {
            const liClassName = `li${index + 1}`;
            return (
              <li key={item.id} className={liClassName} id="RISingleBox">
                <Link className="RIimg" to={`/Detail/${item.id}`}>
                  <img src={item.images} alt="product image" />
                </Link>
                <div className="RIprice">${item.price}</div>
                <div className="RIdescription">
                  {item.description.slice(0, 30)}
                  <Link to={`/Detail/${item.id}`}>...see more</Link>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecomendedItems;

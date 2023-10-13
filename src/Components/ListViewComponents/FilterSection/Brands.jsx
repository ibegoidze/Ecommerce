import React from "react";
import "./Brands.scss";
import { useDispatch } from "react-redux";
import { productsData } from "../../../Store/Products";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


const Brands = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsData()); // 12
  }, [dispatch]);
  const { products } = useSelector((state) => state.products);

  const [wrapBrands, setWrapBrands] = useState(true);
  const [seeAll, setSeeAll] = useState(false);
  const [all, setAll] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const uniqueBrands = [...new Set(products.map(product => product.brand))];
  const uniqueBrandsWithIds = uniqueBrands.map((brand, index) => ({
    id: index + 1,
    brand: brand,
  }));

  const handleChangeBrand = (brandId) => {
    setSearchParams({
      ...params,
      brand: brandId,
      pageNumber: 1,
    });
  };
 
  return (
    <div className="LVBmain">
      <div className="LVBcontainer">
        <div className="LVBbrand">
          <h4>Brand</h4>
          <svg
            onClick={() => {
              setWrapBrands((preVlaue) => !preVlaue);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z"
              fill="#8B96A5"
            />
          </svg>
        </div>
        <div>
          {wrapBrands && (
            <div className="LVBlist">
              <ul className={`${seeAll ? "LVBlistUl" : ""}`}>
                {uniqueBrandsWithIds.map((item) => {
                  return <li key={item.id} className="LVBli" onClick={() => handleChangeBrand(item.id)}><input type="checkbox" className="LVBcheckbox" id={Math.random()} />{item.brand}</li>;
                })}
              </ul>
              <div
                className={`${!seeAll ? "LVBseeall" : "oxsioli"}`}
                onClick={() => {
                  setSeeAll((pre) => !pre);
                  seeAll ? setAll("more") : setAll("less");
                }}
              >
                See {all}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Brands;

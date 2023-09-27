import React from "react";
import "./RecomendedItems.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../../Store/Products/index";

const RecomendedItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsData()); // 5
  }, [dispatch]);
  const { products } = useSelector((state) => state.products);
  const RIproducts = products.slice(0, 10);
  return (
    <div className="RImain">
      <div className="RIcontainer">
        <div className="RIbox">
          {RIproducts.map((item) => {
            return (
              <li key={item.id}>
                <div className="RIimg">
                  <img src={item.images} alt="product image" />
                </div>
                <div className="RIprice">${item.price}</div>
                <div className="RIdescription">
                  {item.description.slice(0, 30)}...see more
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

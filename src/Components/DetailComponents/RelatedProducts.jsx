import React from "react";
import "./RelatedProducts.scss";
import { Link } from "react-router-dom";

const RelatedProducts = ({ latestProducts }) => {
  return (
    <div className="RPmain">
      <div className="RPcontainer">
        <p className="RPheader">Related products</p>
        <div className="RPsingleBox">
          {latestProducts.map((item) => {
            return (
              <li key={item.id}>
                <Link className="RIimg" to={`/Detail/${item.id}`}>
                  <div className="RPimageDiv">
                    <img src={item.image} alt="item image" />
                  </div>
                  <div className="RPname">
                    {item.name.slice(0, 15)}...see more
                  </div>
                  <div className="RPprice">${item.price}</div>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;

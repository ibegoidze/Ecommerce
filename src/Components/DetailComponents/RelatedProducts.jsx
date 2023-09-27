import React from "react";
import "./RelatedProducts.scss";

const RelatedProducts = ({latestProducts}) => {

    console.log(latestProducts)

  return (
    <div className="RPmain">
      <div className="RPcontainer">
        <div className="RPheader">Related products</div>
        <div className="RPsingleBox">
            {latestProducts.map((item) => {
                return (
                    <li key={item.id}>
                        <div className="RPimageDiv">
                            <img src={item.image} alt="item image"/>
                        </div>
                        <div className="RPname">{item.name.slice(0,15)}...see more</div>
                        <div className="RPprice">${item.price}</div>
                    </li>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;

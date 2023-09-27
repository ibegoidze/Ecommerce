import React from "react";
import "./YouMayLike.scss";

const YouMayLike = ({ data }) => {
  return (
    <div className="YMLmain">
      <div className="YMLcontainer">
        <div className="YMLheader">You may like</div>
        <div className="YMLsingleBox">
          {data.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <img src={item.image} />
                </div>
                <div>
                  <div className="YMLitemName">{item.name.slice(0, 10)}...</div>
                  <div className="YMLsalePrice">
                    ${item.newPrice}{' '}{' '}
                    <p>{Math.round(100 - (item.newPrice * 100) / item.oldPrice)}% off</p>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YouMayLike;

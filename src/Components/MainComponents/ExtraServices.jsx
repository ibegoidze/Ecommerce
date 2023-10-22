import React from "react";
import "./ExtraServices.scss";

import ESphotoOne from "../../images/ESphotoOne.png";
import ESphotoTwo from "../../images/ESphotoTwo.png";
import ESphotoThree from "../../images/ESphotoThree.png";
import ESphotoFour from "../../images/ESphotoFour.png";

const ExtraServices = () => {
  return (
    <div className="ESmain">
      <div className="EScontainer">
        <div className="ESbox">
          <div className="ESbackImage">
            <img src={ESphotoOne} alt="ESphotoOne" />{" "}
          </div>
          <div className="EStext">
            <span>
              Source from <br /> Industry Hubs
            </span>
          </div>
        </div>
        <div className="ESbox">
          <div className="ESbackImage">
            <img src={ESphotoTwo} alt="ESphotoOne" />{" "}
          </div>
          <div className="EStext">
            <span>
              Source from <br /> Industry Hubs
            </span>
          </div>
        </div>
        <div className="ESbox">
          <div className="ESbackImage">
            <img src={ESphotoThree} alt="ESphotoOne" />{" "}
          </div>
          <div className="EStext">
            <span>
              Source from <br /> Industry Hubs
            </span>
          </div>
        </div>
        <div className="ESbox">
          <div className="ESbackImage">
            <img src={ESphotoFour} alt="ESphotoOne" />{" "}
          </div>
          <div className="EStext">
            <span>
              Source from <br /> Industry Hubs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;

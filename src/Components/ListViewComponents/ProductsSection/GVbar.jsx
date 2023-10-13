import React from "react";
import "./GVbar.scss";

const GVbar = ({ dataFromParent}) => {
  return (
    <div className="GVmain">
      <div className="GVcontainer">
        <div className="GVleftSide">
          {dataFromParent} items in <p> Products list</p>
        </div>
        <div className="GVrightSide">
          <input type="checkbox" id={Math.random()} /> Verified only
          <div className="GVtoLV">
            <div className="GVGV">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M11 3H3V11H11V3Z" fill="#1C1C1C" />
                <path d="M11 13H3V21H11V13Z" fill="#1C1C1C" />
                <path d="M21 3H13V11H21V3Z" fill="#1C1C1C" />
                <path d="M21 13H13V21H21V13Z" fill="#1C1C1C" />
              </svg>
            </div>
            <div className="GVLV">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 8H3V4H21V8ZM21 10H3V14H21V10ZM21 16H3V20H21V16Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GVbar;

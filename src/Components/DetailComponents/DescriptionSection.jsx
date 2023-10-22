import React from "react";
import "./DescriptionSection.scss";

const DescriptionSection = ({ SingleProduct }) => {
  return (
    <div className="Dmain">
      <div className="Dcontainer">
        <div className="Dbar">
          <div className="Dsingle">Description</div>
          <div className="Dsingle">Reviews</div>
          <div className="Dsingle">Shipping</div>
          <div className="Dsingle">About company</div>
        </div>
        <div className="Dinformation">{SingleProduct.description}</div>
        <div className="Dlist">
          <div className="DlistSingle">
            <div className="DrightS">Model</div>
            <div className="DrightS">Style</div>
            <div className="DrightS">Certificate</div>
            <div className="DrightS">Size</div>
            <div className="DrightS">Memory</div>
          </div>
          <div className="DlistSingle">
            <div className="DleftS">#87867457</div>
            <div className="DleftS">Classic style</div>
            <div className="DleftS">ISO-6246272423423</div>
            <div className="DleftS">34mm x 450mm x 19mm</div>
            <div className="DleftS">35GB RAM</div>
          </div>
        </div>
        <div className="Dlast">
          <div className="DsingleLast">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z"
                fill="#8B96A5"
              />
            </svg>
            Some great feature name here
          </div>
          <div className="DsingleLast">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z"
                fill="#8B96A5"
              />
            </svg>
            Some great feature name here
          </div>
          <div className="DsingleLast">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z"
                fill="#8B96A5"
              />
            </svg>
            Some great feature name here
          </div>
          <div className="DsingleLast">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z"
                fill="#8B96A5"
              />
            </svg>
            Some great feature name here
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;

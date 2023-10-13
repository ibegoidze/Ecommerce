import React from "react";
import "./DPhotos.scss";
import { useRef } from "react";

const DPhotos = ({ SingleProduct, product }) => {
  const mainImageRef = useRef();
  const handlePicture = (src) => {
    mainImageRef.current.src = src
  };

  console.log(SingleProduct, product)

  return (
    <div className="PVimages">
      <div className="PVmainPhoto">
        <img ref={mainImageRef} src={SingleProduct[1]} alt="random photo" />
      </div>
      <div className="PVlittlePhotos">
        {SingleProduct.map((item, index) => {
          return (
            <img
              onClick={(e) => handlePicture(e.target.src)}
              key={index + 13226123}
              className="PVsinglePhoto"
              src={item}
              alt="random photo"
            />
          );
        })}
      </div>
    </div>
  );
};

export default DPhotos;

import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./PriceRangeSlider.scss";

const PriceRangeSlider = ({ onPriceRangeChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [wrapPriceRange, setWrapPriceRange] = useState(true);

  const handleApplyClick = () => {
    onPriceRangeChange(minPrice, maxPrice);
    console.log(`Selected Price Range: ${minPrice} - ${maxPrice}`);
  };

  return (
    <div className="PRSmain">
      <div className="PRScontainer">
        <div className="PRSheading">
          <h4>Price range</h4>
          <svg
            onClick={() => {
              setWrapPriceRange((preVlaue) => !preVlaue);
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
          {wrapPriceRange && (
            <div>
              <div className="PRSslider">
                <Slider
                  min={0}
                  max={1000}
                  step={1}
                  range
                  value={[minPrice, maxPrice]}
                  onChange={(value) => {
                    setMinPrice(value[0]);
                    setMaxPrice(value[1]);
                  }}
                />
              </div>
              <div className="PRSrangeInputs">
                <div>
                  <input
                    id="PRSone"
                    type="text"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <input
                    id="PRStwo"
                    type="text"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />{" "}
                </div>
                <button onClick={handleApplyClick}>Apply</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;

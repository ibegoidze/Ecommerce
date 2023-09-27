import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { offersData } from "../../Store/Offers/index";

import "./SectionTwo.scss";

const SectionTwo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(offersData()); // 5
  }, [dispatch]);

  const { offers } = useSelector((state) => state.offers);

  return (
    <div className="StMain">
      <div className="StContainer">
        <div className="StOffersBox">
          <h3>Deals and offers</h3>
          <h6>Hygiene equipments</h6>
          <div className="StDateContainer">
            <div className="StDateBox">
              <h5>04</h5>
              <span>Days</span>
            </div>
            <div className="StDateBox">
              <h5>13</h5>
              <span>Hour</span>
            </div>
            <div className="StDateBox">
              <h5>34</h5>
              <span>Min</span>
            </div>
            <div className="StDateBox">
              <h5>56</h5>
              <span>Sec</span>
            </div>
          </div>
        </div>
        <div className="StSingleBox">
          {offers.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <img src={item.image} />
                </div>
                <div className="StItemName">item name</div>
                <div className="StSalePrice">
                  {Math.round(100 - (item.newPrice * 100) / item.oldPrice)}%
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

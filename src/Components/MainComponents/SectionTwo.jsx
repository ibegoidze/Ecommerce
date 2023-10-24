import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { offersData } from "../../Store/Offers/index";
import { useState } from "react";
import "./SectionTwo.scss";

const SectionTwo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(offersData());
  }, [dispatch]);

  const { offers } = useSelector((state) => state.offers);
  const [countdown, setCountdown] = useState(5 * 24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          return 5 * 24 * 60 * 60;
        }
      });
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(countdown / (24 * 60 * 60));
  const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = countdown % 60;

  return (
    <div className="StMain">
      <div className="StContainer">
        <div className="StOffersBox">
          <h3>Deals and offers<p>Electronic equipments</p> </h3>
          <h6>Electronic equipments</h6>
          <div className="StDateContainer">
            <div className="StDateBox">
              <h5>{days}</h5>
              <span>Days</span>
            </div>
            <div className="StDateBox">
              <h5>{hours}</h5>
              <span>Hour</span>
            </div>
            <div className="StDateBox">
              <h5>{minutes}</h5>
              <span>Min</span>
            </div>
            <div className="StDateBox">
              <h5>{seconds}</h5>
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
                <div className="StItemName">{item.name.slice(0, 10)}</div>
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

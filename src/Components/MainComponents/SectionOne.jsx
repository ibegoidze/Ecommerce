import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesData } from "../../Store/Categories/index";

import personIcon from "../../images/SoImages/personIcon.png.png";

import "./SectionOne.scss";

const SectionOne = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoriesData()); // 12
  }, [dispatch]);

  const { categories } = useSelector((state) => state.categories);

  return (
    <div className="SoMain">
      <div className="SoContainer">
        <div className="SoeCategories">
          <div className="SoSingleCategorie">
            {categories.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.name}</span>
                </li>
              );
            })}
          </div>
        </div>
        <div className="SoWallpaper">
          <h2>Latest trending</h2>
          <h1>Electronic items</h1>
          <button type="button">Learn more</button>
        </div>
        <div className="SoBoxes">
          <div className="SofirstBox">
            <div className="SoIconText">
              <img src={personIcon} alt="person icon" />
              <span>
                Hi user <br /> let's get started
              </span>
            </div>
            <div>
              <button className="SoJoinNow">Join now</button>
            </div>
            <div>
              <button className="SoLogIn">Log in</button>
            </div>
          </div>
          <div className="SoSecondBox">
            <span>Get US $10 off <br/>with a new <br/>supplier</span>
          </div>
          <div className="SoThirdBox">
            <span>Send quotes with supplier preferences</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

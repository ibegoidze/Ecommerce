import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesData } from "../../Store/Categories/index";
import { useNavigate, useSearchParams } from "react-router-dom";

import personIcon from "../../images/SoImages/personIcon.png.png";

import "./SectionOne.scss";

const SectionOne = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  const token = localStorage.getItem('token')

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoriesData()); // 12
  }, [dispatch]);

  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categories);

  const handleChangeCategory = (categorieId) => {
    setSearchParams({
      ...params,
      category: categorieId,
      pageNumber: 1,
    });
    navigate(`/ListView?category=${categorieId}`);
  };

    const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="SoMain">
      <div className="SoContainer">
        <div className="SoeCategories">
          <div className="SoSingleCategorie">
            {categories.map((item) => {
              return (
                <li
                  onClick={() => {
                    handleChangeCategory(item.id);
                  }}
                  key={item.id}
                >
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
            {!token? <div>
              <button onClick={() => navigate("/Signin")} className="SoJoinNow">
                Join now
              </button>
            </div> : ''}
            <div>
              {token ? <button onClick={() => handleLogout()} className="SoLogIn">
              Log out
            </button> :
              <button onClick={() => navigate("/Signin")} className="SoLogIn">
                Log in
              </button>
              }
            </div>
          </div>
          <div className="SoSecondBox">
            <span>
              Get US $10 off <br />
              with a new <br />
              supplier
            </span>
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

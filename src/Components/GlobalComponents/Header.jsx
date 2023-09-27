import "./Header.scss";
import profile from "../../images/profile.png";
import heart from "../../images/Heart.png";
import message from "../../images/Message.png";
import cart from "../../images/Cart.png";
import logo from "../../images/logo-symbol.png";
import Brand from "../../images/Brand.png";

import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="headerDiv">
        <div className="brandLogo">
          <span onClick={() => navigate("/")} className="logo">
            <img src={logo} alt="logo" />
          </span>
          <span className="brandSpan">
            <img src={Brand} onClick={() => navigate("/")} alt="brand logo" />
          </span>
        </div>
        <div className="searchContainer">
          <div className="searchDiv">
            <input type="text" placeholder="Search" id="search"></input>
            <button type="button">Search</button>
          </div>
        </div>
        <div className="navigation">
          <ul className="navigationUl">
            <li className="navigationLi">
              <div
                className="navigationItemContainer"
                onClick={() => navigate("SignIn")}
              >
                <img src={profile} alt="profile logo" />
                <span className="textSpan">Profile</span>
              </div>
            </li>
            <li className="navigationLi">
              <div
                className="navigationItemContainer"
                onClick={() => navigate("/")}
              >
                <img src={message} alt="message logo" />
                <span className="textSpan">Message</span>
              </div>
            </li>
            <li className="navigationLi">
              <div
                className="navigationItemContainer"
                onClick={() => navigate("Cart")}
              >
                <img src={heart} alt="heart logo" />
                <span className="textSpan">Orders</span>
              </div>
            </li>
            <li className="navigationLi">
              <div
                className="navigationItemContainer"
                onClick={() => navigate("Cart")}
              >
                <img src={cart} alt="cart logo" />
                <span className="textSpan">My cart</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "antd";

import "./Header.scss";
import profile from "../../images/profile.png";
import heart from "../../images/Heart.png";
import message from "../../images/Message.png";
import cart from "../../images/Cart.png";
import logo from "../../images/logo-symbol.png";
import Brand from "../../images/Brand.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartProducts } from "../../Store/Cart/Cart";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = localStorage.getItem("token");

  const showModal = () => {
    if (token) {
      navigate("/Cart");
    } else {
      setIsModalOpen(true);
    }
  };
  const handleOk = () => {
    navigate("/Cart");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const { cartItems, addTocartIsLoading, removeFromCartIsLoading } =
    useSelector((state) => state.cartItems);

  const handleSearch = () => {
    if (searchValue) {
      setSearchParams({
        ...params,
        searchKey: searchValue,
        pageNumber: 1,
      });
      navigate(`/ListView?searchKey=${searchValue}`);
      setSearchValue("");
    }
  };

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch, removeFromCartIsLoading, addTocartIsLoading]);

  console.log(cartItems);

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
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search"
              id="search"
            ></input>
            <button type="button" onClick={() => handleSearch()}>
              Search
            </button>
          </div>
        </div>
        <div className="navigation">
          <ul className="navigationUl">
            <li className="navigationLi">
              <div
                className="navigationItemContainer"
                onClick={() => navigate("/")}
              >
                <img src={heart} alt="heart logo" />
                <span className="textSpan">Main</span>
              </div>
            </li>

            <li className="navigationLi">
              <div
                className="navigationItemContainer"
                onClick={() => navigate("/Listview")}
              >
                <img src={message} alt="message logo" />
                <span className="textSpan">Products</span>
              </div>
            </li>
            <li className="navigationLi">
              <div className="navigationItemContainer" onClick={() => navigate("/auth/login")}>
                <img src={profile} alt="profile logo" />
                <span className="textSpan" >Sign in</span>
              </div>
            </li>
            <li className="navigationLi">
              <div
                className="navigationItemContainer"
                onClick={() => showModal()}
              >
                <img src={cart} alt="cart logo" />
                <span className="textSpan">Cart</span>
              </div>
              <Modal
                title="Basic Modal"
                okText={"Log In"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>you must be authorized</p>
              </Modal>
              {cartItems.length > 0 && (
                <span className="cartBadge">
                  <div className="asdawfawfawg">{cartItems.length}</div>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

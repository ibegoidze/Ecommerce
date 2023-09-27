import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartContainer.scss";
import { removeFromCart } from "../../Store/Cart/Cart";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const dispatch = useDispatch()
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  console.log(cartItems);

  return (
    <div className="CC-PriceBox">
      <div className="CCcontainer">
        <ul className="CCbox">
        <h2>My cart {`(${cartItems.length})`}</h2>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="CCimg">
                <img src={item.images} alt="product image" />
              </div>
              <div className="CCpriceDescription">
                <div className="CCitemName">{item.model}</div>
                <div className="CCprice">${item.price}</div>
                <div className="CCdescription">
                  {item.description.slice(0, 190)}
                  <span>...see more</span>
                </div>
                <div className="CCviewDetails">View details</div>
                <div>
                <button className="CCremoveButton" onClick={() => handleRemoveFromCart(item.id)}>
              Remove product
            </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="CCpriceBox">
        <div className="CCcouponBox">
          <div><h5>Have a coupon?</h5></div>
          <div><input type="text" id="CCpriceboxInput" placeholder="Add coupon"/></div>
        </div>
        <div className="CCpriceSection">
            <div className="CCsubtotal">
                <span>Subtotal:</span>
                <span>total price</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

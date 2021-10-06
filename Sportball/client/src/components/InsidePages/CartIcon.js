import CartContext from "../../context/cart/CartContext";
import { Fragment, useContext } from "react";
import "../InsidePages/insidePages_cssFiels/cartIcon.css";
import CartItem from "./CartItem";
import football from "../InsidePages/sportImages/football-field.jpg";
import basketball from "../InsidePages/sportImages/basketball.jpg";
import mix from "../InsidePages/sportImages/mix.jpg";
import hall from "../InsidePages/sportImages/hall.jpg";
import tenis from "../InsidePages/sportImages/tenis.jpg";
import fit from "../InsidePages/sportImages/fit.jpg";
import route from "../InsidePages/sportImages/route.jpg";
import swimming from "../InsidePages/sportImages/swimming.jpg";
import send from "../InsidePages/sportImages/send.jpg";
import kat from "../InsidePages/sportImages/kat.jpg";
import fitch from "../InsidePages/sportImages/fitch.jpg";
import notfound from "../InsidePages/sportImages/notfound.png";
import { Link } from "react-router-dom";

const getAssetByStatus = (status) => {
  if (status.includes("כדורגל")) {
    return [football, 200];
  }
  if (status.includes("כדורסל")) {
    return [basketball, 150];
  }
  if (status.includes("משולב")) {
    return [mix, 0];
  }
  if (status.includes("אולם")) {
    return [hall, 160];
  }
  if (status.includes("טניס")) {
    return [tenis, 70];
  }
  if (status.includes("כושר")) {
    return [fit, 30];
  }
  if (status.includes("שחיה")) {
    return [swimming, 20];
  }
  if (status.includes("מסלול")) {
    return [route, 200];
  }
  if (status.includes("כללי")) {
    return [mix, 0];
  }
  if (status.includes("חול")) {
    return [send, 0];
  }
  if (status.includes("קטרגל" || "קט")) {
    return [kat, 200];
  }
  if (status.includes("פיץ")) {
    return [fitch, 150];
  } else {
    return [notfound, 0];
  }
};

const CartIcon = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <>
      {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div className="cart__innerWrapper">
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.uniqueId} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="Cart__cartTotal">
            <div>Cart Total</div>
            <div style={{ marginLeft: 5 }}>
              <h3>
                {cartItems.reduce(
                  (amount, item) => getAssetByStatus(item.Type)[1] + amount,
                  0
                )}{" "}
                {"שח"}
              </h3>
            </div>
          </div>
          <Fragment>
            <li className="nav-item">
              <Link
                to="/user/area/check-out"
                className="go_to_checkout"
                aria-current="page"
              >
                Go to check Out Screen
              </Link>
            </li>
          </Fragment>
        </div>
      )}
    </>
  );
};

export default CartIcon;

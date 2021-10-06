import { useContext } from "react";

import CartContext from "../../context/cart/CartContext";

import "../InsidePages/insidePages_cssFiels/CartItem.css";

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

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <li className="CartItem__item">
      <div className="right">
        <h6>{" שם המגרש"}</h6>
        <h6 className="red-color">{item.Name}</h6>
        <h6>{"מחיר לשעת השכרה"}</h6>
        <h6 className="red-color">{getAssetByStatus(item.Type)[1]}</h6>
      </div>

      <img
        src={getAssetByStatus(item.Type)[0]}
        width="80%"
        height="200x"
        alt=""
      />

      <button
        className="CartItem__button"
        onClick={() => removeItem(item.uniqueId)}
      >
        Remove
      </button>
    </li>
  );
};

export default CartItem;

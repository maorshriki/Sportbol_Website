import "../InsidePages/insidePages_cssFiels/FieldCard.css";
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
import React, { useContext } from "react";
import cartContext from "../../context/cart/CartContext";

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

const FieldCard = ({ field }) => {
  const { addToCart } = useContext(cartContext);
  return (
    <div className="fieldCard_wrapper" stel>
      <div>
        <div className="fieldCard_img">
          <img
            src={getAssetByStatus(field.Type)[0]}
            width="100%"
            height="240x"
            alt=""
          />
        </div>
        <div className="field_Type">
          <h3>
            {"סוג המגרש :"} {field.Type}
          </h3>
        </div>
        <div className="field_Name">
          <h3>
            {"שם המגרש :"} {field.Name}
          </h3>
        </div>
        <div className="field_street">
          <h3>
            {"רחוב : "}
            {field.street}
          </h3>
        </div>
        <div className="field_HouseNumbe">
          <h3>
            {" "}
            {"מס' בית : "}
            {field.HouseNumbe}
          </h3>
        </div>
        <div className="field_Activity">
          <h3>
            {"שעות פעילות : "}
            {field.Activity}
          </h3>
        </div>
        <div className="field_fencing">
          <h3>
            {"גידור : "}
            {field.fencing}
          </h3>
        </div>
        <div className="field_lighting">
          <h3>
            {"תאורה : "}
            {field.lighting}
          </h3>
        </div>
        <div className="field_condition">
          <h3>
            {"מצב המגרש : "}
            {field.condition}
          </h3>
        </div>
        <div className="field_Owner">
          <h3>
            {"אחראי המגרש : "}
            {field.Owner}
          </h3>
        </div>
        <div className="field_handicappe">
          <h3>
            {"נגישות לנכים : "}
            {field.handicappe}
          </h3>
        </div>
        <div className="field_price">
          <h3>
            {" מחיר השכרה יומי : "}
            {getAssetByStatus(field.Type)[1]} {"שח"}
          </h3>
        </div>
        <button className="field_button" onClick={() => addToCart(field)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FieldCard;

// {
//     Type: "מגרש כדורסל – 19X32 מ'",
//     Name: "אור",
//     street: "מאיר יערי",
//     HouseNumbe: "50.0",
//     neighborhor: "יא",
//     Operator: "ניהול עצמי",
//     Seats: "0.0",
//     Activity: "פתוח ללא הגבלה",
//     fencing: "קיים גידור",
//     lighting: "קיימת תאורה",
//     handicappe: "נגיש לנכים",
//     condition: "תקין ופעיל",
//     Owner: "עיריית באר שבע",
//     ForSchool: "אור",
//     associatio: "",
//     SportType: "",
//     lat: "574071.2401999999",
//     lon: "177490.88269999996",
//   },

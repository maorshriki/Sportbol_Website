import React from "react";
import cartContext from "../../context/cart/CartContext";
import { useContext } from "react";
import "../InsidePages/insidePages_cssFiels/CheckOut.css";

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

const CheckOut = () => {
  const { cartItems } = useContext(cartContext);
  const handlePureCash = () => {
    localStorage.setItem("checkOutPress", true);
    alert("your order recived");
  };
  // taking from https://bbbootstrap.com/snippets/checkout-form-12016070
  return (
    <div className="all-back">
      {cartItems.map((item) => (
        <div className="row mainRow">
          <div className="row-sm-8">
            <div className="card card-cascade wider shadow p-3 ">
              <div className="view view-cascade overlay text-center">
                {" "}
                <a>
                  <img
                    class="card-img-top"
                    src={getAssetByStatus(item.Type)[0]}
                    alt=""
                  ></img>
                  <div className="mask rgba-white-slight"></div>
                </a>{" "}
              </div>
              <div className="desc">
                <div className="row subRow">
                  <div className="col">
                    <p className="text-muted row1">{"שם מגרש"}</p>
                    <p className="row2">{item.Name}</p>
                  </div>

                  <div className="col">
                    <p className="text-muted row1">{"סוג מגרש"}</p>
                    <p className="row2">{item.Type}</p>
                  </div>

                  <div className="col">
                    <p className="text-muted row1">{"מיקום"}</p>
                    <p className="row2">{item.street}</p>
                  </div>
                </div>
                <div className="row subRow">
                  <div className="col">
                    <p className="text-muted row1">{"מצב תאורה"}</p>
                    <p className="row2">{item.fencing}</p>
                  </div>

                  <div className="col">
                    <p className="text-muted row1">{"מצב המגרש"}</p>
                    <p className="row2">{item.condition}</p>
                  </div>

                  <div className="col">
                    <p className="text-muted row1">{"אחראי מגרש"}</p>
                    <p className="row2">{item.Owner}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="col-sm-4 position-absolute top-0 end-0">
        <div className="card wider shadow p-2 mb-3 ">
          <div className="card-body card-body-cascade">
            <div className="card2decs">
              <p className="heading1">
                <strong>{}</strong>
              </p>
              <p className="total">
                <strong>Total</strong>
                <span className="float-right totalText1">
                  <span className="totalText2">
                    {
                      <h3>
                        {cartItems.reduce(
                          (amount, item) =>
                            getAssetByStatus(item.Type)[1] + amount,
                          0
                        )}{" "}
                        {"שח"}
                      </h3>
                    }
                  </span>
                </span>
              </p>
            </div>
            <div className="payment">
              <p className="heading2">
                <strong>Payment Details</strong>
              </p>
              <br></br>
              Name<br></br>
              <br></br>
              <input
                type="Name"
                class="form-control"
                placeholder="Enter your card number"
              ></input>
              <br></br>
              <br></br>
              Credit Card Number<br></br>
              <br></br>
              <input
                type="Card Number"
                class="form-control"
                placeholder="Enter your card number"
              ></input>
              <div class="row">
                <div class="form-group col-sm-4">
                  <label for="ccmonth">Month</label>
                  <select class="form-control" id="ccmonth">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                </div>
                <div class="form-group col-sm-4">
                  <label for="ccyear">Year</label>
                  <select class="form-control" id="ccyear">
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="cvv">CVV/CVC</label>
                    <input
                      class="form-control"
                      id="cvv"
                      type="text"
                      placeholder="000"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handlePureCash} className="purchaseLink">
              <div className="card-footer text-center"> PURCHASE</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

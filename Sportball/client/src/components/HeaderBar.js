import React, { Fragment, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, onLogOuut } from "./auth";
import cartContext from "../context/cart/CartContext";
import { onLogOut } from "../api/auth";

const Nav = ({ history }) => {
  const { showHideCart, addedItems } = useContext(cartContext);
  var { cartItems } = useContext(cartContext);
  const handleLogOut = (e) => {
    if (JSON.parse(localStorage.getItem("checkOutPress")) !== true) {
      cartItems = [];
    }
    const adedItems = addedItems;
    const userRole = localStorage.getItem("user_role");
    const userName = localStorage.getItem("user_Name");
    const userEmail = localStorage.getItem("user_email");
    const purCas = cartItems;
    const inTime = localStorage.getItem("user_logInTime");
    const OutTime = Date();
    // const result = adedItems + userDet + purCas + inTime + OutTime;
    const flag = false;
    const data = {
      adedItems,
      userRole,
      userName,
      userEmail,
      purCas,
      inTime,
      OutTime,
      flag,
    };
    onLogOut(data)
      .then((response) => {
        console.log(JSON.stringify(response.data.userDetRes));
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    onLogOuut(() => {
      history.push("/signin");
      window.location.reload();
    });
  };

  // taking from https://getbootstrap.com/docs/5.1/components/navbar/#responsive-behaviors
  // getbootstrap
  const showNavigate = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          SportBol
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page">
                    <i className="fas fa-home"></i> Home Page
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signUp" className="nav-link" aria-current="page">
                    <i className="fas fa-edit"></i> Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="signIn" className="nav-link">
                    <i className="fas fa-sign-in-alt"></i> Signin
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role === "user" && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/user/area"
                    className="nav-link"
                    aria-current="page"
                  >
                    <i className="fas fa-shopping-cart"></i> Shop
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role !== "user" && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/admin/area"
                    className="nav-link"
                    aria-current="page"
                  >
                    Admin Area
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role === "user" && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/user/area/Page-One"
                    className="nav-link"
                    aria-current="page"
                  >
                    <i class="fas fa-file"></i> About Us
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role === "user" && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/user/area/Page-Two"
                    className="nav-link"
                    aria-current="page"
                  >
                    <i class="fa fa-comments" aria-hidden="true"></i> Complaint
                    box
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role === "user" && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/user/area/Page-Three"
                    className="nav-link"
                    aria-current="page"
                  >
                    BMI calculator
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role === "user" && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/user/area/Page-Four"
                    className="nav-link"
                    aria-current="page"
                  >
                    Recipes
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role === "user" && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/user/area/Readme"
                    className="nav-link"
                    aria-current="page"
                  >
                    <i class="fab fa-readme"></i> Readme - Maor
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && isAuthenticated().role === "user" && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/user/area/check-out"
                    className="nav-link"
                    aria-current="page"
                  >
                    <i class="fa fa-check" aria-hidden="true"></i>Check Out
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role === "user" && (
              <li className="left-icon-holder navbar navbar-expand-lg navbar-light bg-light">
                Cart
                <i
                  className="fa fa-shopping-cart"
                  aria-hidden="true"
                  onClick={showHideCart}
                />
                {cartItems.length > 0 && (
                  <div className="item__count">
                    <span className="font_red">{cartItems.length}</span>
                  </div>
                )}
              </li>
            )}
            {isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <button
                    className="btn btn-link text-secondary text-decoration-none"
                    aria-current="page"
                    onClick={handleLogOut}
                  >
                    <i className="fas fa-sign-out-alt"></i> Log Out
                  </button>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );

  return <header id="header">{showNavigate()} </header>;
};

export default withRouter(Nav);

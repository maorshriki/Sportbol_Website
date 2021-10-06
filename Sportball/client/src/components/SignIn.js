import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { showErrorMsg } from "./Msg";
import { showLoading } from "./Load";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { onSignIn } from "../api/auth";
import { setAuthentication, isAuthenticated } from "./auth";
import "./SignUp.css";

const SignIn = () => {
  let history = useHistory();
  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role !== "user") {
      history.push("/admin/area");
    } else if (isAuthenticated() && isAuthenticated().role === "user") {
      history.push("/user/area");
    }
  }, [history]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
    errorMsg: false,
    loading: false,
  });
  const { email, password, errorMsg, loading } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      errorMsg: "",
    });
  };
  const handleRemember = (e) => {
    setFormData({
      ...formData,
      remember: true,
      errorMsg: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(email) || isEmpty(password)) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid email",
      });
    } else {
      const { email, password, remember } = formData;
      const flag = "false";
      const defult1 = "";
      const defult2 = "";
      const data = { email, password, flag, defult1, defult2 };
      setFormData({ ...formData, loading: true });
      onSignIn(data)
        .then((response) => {
          setAuthentication(response.data.token, response.data.user, remember);
          if (isAuthenticated() && isAuthenticated().role !== "user") {
            localStorage.setItem("user_role", isAuthenticated().role);
            history.push("/admin/area");
          } else {
            localStorage.setItem("user_role", isAuthenticated().role);
            localStorage.setItem("user_email", isAuthenticated().email);
            localStorage.setItem("user_Name", isAuthenticated().username);
            localStorage.setItem("user_logInTime", Date().toLocaleString());
            localStorage.setItem("checkOutPress", false);
            history.push("/user/area");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const showSignInForm = () => (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <p className="display-1 text-center text-white">Sign In</p>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-envelope fa-3x"></i>
          </span>
        </div>
        <input
          name="email"
          value={email}
          className="form-control"
          placeholder="Email address"
          type="email"
          onChange={handleChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock fa-3x"></i>
          </span>
        </div>
        <input
          name="password"
          value={password}
          className="form-control"
          placeholder="Create password"
          type="password"
          onChange={handleChange}
        />
      </div>

      <p className="text-center text-white fs-4"></p>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary mx-auto d-block btn-lg "
        >
          Sign In
        </button>
      </div>

      <p className="text-center text-white fs-4"></p>
      <div className="text-center text-white fs-5 ">
        <input
          name="remember"
          type="checkbox"
          className="custom-control-input"
          id="customControlInline"
          onClick={handleRemember}
        ></input>
        <a>{" "}</a><label className="custom-control-label"> {"  "} Remember me</label>
      </div>
      <p className="text-center text-white fs-4"></p>
      <p className="text-center text-white fs-4">
        don't Have an account?{" "}
        <Link className="text-center text-white fs-5" to="/signup">
          Register now
        </Link>
      </p>
    </form>
  );

  return (
    <div className="back-sign-in">
      <div className="row px vh-100">
        <div className="col-md-6 mx-auto align-self-center">
          {errorMsg && showErrorMsg(errorMsg)}
          {loading && <div className="text-center pb-4">{showLoading()}</div>}
          {showSignInForm()}
        </div>
      </div>
    </div>
  );
};

export default SignIn;

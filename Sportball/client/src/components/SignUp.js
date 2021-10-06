import React, { useState, useEffect } from "react";

// taken form https://www.npmjs.com/package/validator

import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";

import { isAuthenticated } from "./auth";
import { showErrorMsg, showSuccessMsg } from "./Msg";
import { showLoading } from "./Load";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";
import { onSignUp } from "../api/auth";

const SignUp = () => {
  let history = useHistory();
  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role !== "user") {
      history.push("/admin/area");
    } else if (isAuthenticated() && isAuthenticated().role === "user") {
      history.push("/user/area");
    }
  }, [history]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPas: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });
  const {
    username,
    email,
    password,
    confirmPas,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  const handleChange = (e) => {
    //console.log(evt);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      successMsg: "",
      errorMsg: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(confirmPas)
    ) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid email",
      });
    } else if (!equals(password, confirmPas)) {
      setFormData({
        ...formData,
        errorMsg: "Passwords do not match",
      });
    } else {
      // setFormData({ ...formData, successMsg: "validation are success" })
      const { username, email, password } = formData;
      const data = { username, email, password };

      setFormData({ ...formData, loading: true });

      onSignUp(data)
        .then((res) => {
          console.log("signup success: ", res);
          setFormData({
            username: "",
            email: "",
            password: "",
            confirmPas: "",
            loading: false,
            // taking fron axios doc
            successMsg: res.data.successMessage,
          });
        })
        .catch((err) => {
          console.log("signup error: ", err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }
  };

  const showSignupForm = () => (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <p className="display-1 text-center text-black">Sign Up</p>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-user fa-3x"></i>
          </span>
        </div>
        <input
          name="username"
          value={username}
          className="form-control"
          placeholder="Username"
          type="text"
          onChange={handleChange}
        />
      </div>
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
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock fa-3x"></i>
          </span>
        </div>
        <input
          name="confirmPas"
          value={confirmPas}
          className="form-control"
          placeholder="Confirm password"
          type="password"
          onChange={handleChange}
        />
      </div>

      <p className="text-center text-black fs-4"></p>

      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary mx-auto d-block btn-lg "
        >
          Sign Up
        </button>
      </div>
      <p className="text-center text-black fs-4"></p>
      <p className="text-center text-black fs-4">
        Have an account?{" "}
        <Link className="text-center text-black fs-5" to="/signin">
          Log In
        </Link>
      </p>
    </form>
  );

  return (
    <div className="back-sign-up">
      <div className="row px vh-100">
        <div className="col-md-6 mx-auto align-self-center">
          {successMsg && showSuccessMsg(successMsg)}
          {errorMsg && showErrorMsg(errorMsg)}
          {loading && <div className="text-center pb-4">{showLoading()}</div>}
          {showSignupForm()}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

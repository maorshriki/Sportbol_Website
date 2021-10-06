import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./HeaderBar";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AdminArea from "./AdminArea";
import ErrorPage from "./ErrorPage";
import AboutUs from "./InsidePages/AboutUs";
import PageTwo from "./InsidePages/PageTwo";
import PageThree from "./InsidePages/PageThree";
import PageFour from "./InsidePages/PageFour";
import CheckOut from "./InsidePages/CheckOut";
import Cart from "./InsidePages/CartScreen";
import CartIcon from "./InsidePages/CartIcon";
import Readme from "./InsidePages/Readme";

const App = () => (
  <BrowserRouter>
    <Nav />
    <CartIcon />

    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/user/area" component={Cart} />
        <Route exact path="/user/area" component={CartIcon} />
        <Route exact path="/user/area/Page-One" component={AboutUs} />
        <Route exact path="/user/area/Page-Two" component={PageTwo} />
        <Route exact path="/user/area/Page-Three" component={PageThree} />
        <Route exact path="/user/area/Page-Four" component={PageFour} />
        <Route exact path="/user/area/Readme" component={Readme} />
        <Route exact path="/user/area/cart" component={Cart} />
        <Route exact path="/user/area/check-out" component={CheckOut} />
        <Route exact path="/admin/area" component={AdminArea} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;

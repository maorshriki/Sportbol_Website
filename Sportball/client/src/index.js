import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import CartState from "./context/cart/cartSatate";

ReactDOM.render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

import React from "react";
import cart from "../../img/cart.svg";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cartWidget-container">
      <img src={cart} height="24px" width="24px" alt="cart" />
    </div>
  );
};

export default CartWidget;

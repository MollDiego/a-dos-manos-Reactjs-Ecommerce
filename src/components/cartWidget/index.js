import React from "react";
import cart from "../../img/cart.svg";

export const CartWidget = () => {
  return (
    <div className="mr-4">
      <img src={cart} height="24px" width="24px" alt="cart" />
    </div>
  );
};

export default CartWidget;

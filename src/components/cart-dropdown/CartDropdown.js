import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/Custom-button";
import CartItem from "../cart-item/CartItemComponent";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" >
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateTOProps = state =>({
  cartItems: state.cart.cartItems
})

export default connect(mapStateTOProps)(CartDropdown);

import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/Custom-button";
import CartItem from "../cart-item/CartItemComponent";
import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from "react-router-dom";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({cartItems ,history}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" >
        {
          cartItems.length ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
          :
          <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={()=> history.push("/checkout")}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateTOProps = state =>({
  cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateTOProps)(CartDropdown));

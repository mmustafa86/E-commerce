import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
 
import {auth} from '../../firebase/firebase.utils'

import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
const Header = ({currentUser ,hidden}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
          <Logo className='logo'/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
            SHOP
        </Link>
        <Link className="option" to="/shop">
        CONTACT
        </Link>
        { 
            // sigout provided by the firebase library 
            currentUser ? 
            <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
            :
            <Link className='option' to='/signin'>Sign In</Link>
        }
        <CartIcon/>
      </div>
      {
        hidden ? null :  <CartDropdown/>
      }
     
    </div>
  );
};
//insted to do selectCartHidden(state) use selectCartHidden for multiple selecotrs 
const mapStateToProps= createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);

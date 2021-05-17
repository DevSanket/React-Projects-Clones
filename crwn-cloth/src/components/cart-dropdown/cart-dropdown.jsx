import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../Redux/cart/cart.selector';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../CustomButton/custom-button';
import './cart-dropdown.scss';


const CartDropDown = ({cartItems,history}) => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>) :
                    <span className="empty-message">Your Cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});
 
export default withRouter(connect(mapStateToProps)(CartDropDown));
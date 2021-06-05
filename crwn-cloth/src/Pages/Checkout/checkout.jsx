import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
import { selectCartItems, selectCartTotal } from '../../Redux/cart/cart.selector';
import './checkout.scss';

const CheckoutPage = ({cartItems,total}) => {
    return ( 
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
                <div className="test-warning">
                    *Please use The Following Test Master Card for Payments* 
                    <br></br>
                    5555 5555 5555 4444 - Exp: 01/32 - CVV: 123
                </div>
            </div>
            <StripeCheckoutButton price={total} />
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total:selectCartTotal
})
 
export default connect(mapStateToProps)(CheckoutPage);
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';
import { selectCartItems, selectCartTotal } from '../../Redux/Cart/cart.selector';
import './Checkout.scss';
import StripeCheckoutButton from '../../Components/strip-button/strip-button';

const Checkout = ({cartItems,total}) => {
    return ( 
        <div className="checkout-page">
        {/* <div className="checkout-header">
            <div className="header-block">
                <span><b>PRODUCT [IMG]</b></span>
            </div>
            <div className="header-block">
                <span><b>Name</b></span>
            </div>
            <div className="header-block">
                <span><b>Quantity</b></span>
            </div>
            <div className="header-block">
                <span><b>Price</b></span>
            </div>
            <div className="header-block">
                <span></span>
            </div>
        </div> */}
        {
            cartItems.map(cartItem => 
                
                <CheckoutItem cartItem={cartItem} />
               
                
                )
        }
        <div className="total">
            <span>TOTAL : ₹{total}</span>
        </div>
        <div className="test-warning">
            *Please use the following test Creadit card for payments* <br/>
            4242 4242 4242 4242 - Exp: 01/32 - CVV: 123
        </div>
        {   
            // console.log(cartItems.length)
            cartItems.length > 0 ? <StripeCheckoutButton price={total}/> : <h3>Add Items</h3>
        }
    </div>
     );
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(Checkout);
 

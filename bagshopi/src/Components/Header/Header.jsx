import React from 'react';
import './Header.scss';
import bag from '../../assets/bag.png';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.util';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/user/user.selector';

const Header = ({currentUser}) => {
    return ( 
        <div className="header">
            <Link to='/' className="logo-container">
                <img src={bag} alt="bag" className="logo"/>
            </Link>
        <div className="options">
            {
                currentUser ? <Link className="option">{`Hello, ${currentUser.displayName}..`}</Link> : <div className="option">Hello,User</div>
            }
        <Link to="/" className="option">
                SHOP
            </Link>
            <Link to="/orders" className="option">
                MY ORDERS
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser ? <div className="option" onClick={() => auth.signOut()}> SIGN OUT </div> : <Link className="option" to="/register">
                SIGN IN
            </Link>
            }
            <Link className="option" to="/checkout">
                MY CART
            </Link>
        </div>
        </div>
     );
}
 
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
})

export default connect(mapStateToProps)(Header);
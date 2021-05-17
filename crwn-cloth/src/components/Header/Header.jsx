import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase.utils';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import './Header.scss';
import CartIcon from '../cart-icon/cart-icon';
import { selectCurrentUser } from '../../Redux/User/user.selector';
import { selectCartHidden } from '../../Redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';


const Header = ({currentUser,hidden}) => {
    return ( 
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link to="signin">SIGN IN</Link>
                }
                <CartIcon className="cart-icon" />
            </div>
            {
                hidden ? null : <CartDropDown/>
            }
        </div>
     );
}
 
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);
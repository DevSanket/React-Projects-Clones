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
import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from './Header.styled';


const Header = ({currentUser,hidden}) => {
    return ( 
        <HeaderContainer>
            <LogoContainer to='/' className="logo-container">
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink  to="/shop">
                    CONTACT
                </OptionLink>
                {
                    currentUser ? <OptionDiv  onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> : <OptionLink to="signin">SIGN IN</OptionLink>
                }
                <CartIcon className="cart-icon" />
            </OptionsContainer>
            {
                hidden ? null : <CartDropDown/>
            }
        </HeaderContainer>
     );
}
 
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);
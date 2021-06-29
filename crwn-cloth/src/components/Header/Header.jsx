import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase.utils';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import './Header.scss';
import CartIcon from '../cart-icon/cart-icon';
import { selectCurrentUser } from '../../Redux/User/user.selector';
import { selectCartHidden } from '../../Redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './Header.styles';
import { signOutStart } from '../../Redux/User/user.actions';


const Header = ({currentUser,hidden,signOutStart}) => {
    return ( 
        <HeaderContainer>
            <LogoContainer to="/">
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
                    currentUser ? <OptionLink to="/" onClick={signOutStart}>SIGN OUT</OptionLink> : <OptionLink to="/signin">SIGN IN</OptionLink>
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

const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
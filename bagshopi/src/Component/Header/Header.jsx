import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import bag from '../../assets/bag.png';


const Header = () => {
    return ( 
        <div className="header">
        <Link to='/' className="logo-container">
            <img src={bag} alt="bag" className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
        </div>
    </div>
     );
}
 
export default Header;
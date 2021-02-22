import { BusinessCenter, Home, Message, Notifications, Search, SupervisorAccount } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import './Header.css';
import HeaderOptions from './HeaderOptions';


const Header = () => {
    const dispatch = useDispatch();
    const logOutofApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    return ( <div className="Header">


        <div className="header_left">
            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>   
            <div className="header_search">
                {/* SearchIcon  */}
                <Search/>
                <input placeholder="Search" type="text"/>
            </div>
        </div>
        <div className="header_right">
                <HeaderOptions Icon={Home} title="home"/>
                <HeaderOptions Icon={SupervisorAccount} title="My Network"/>
                <HeaderOptions Icon={BusinessCenter} title="Jobs"/>
                <HeaderOptions Icon={Message} title="Messaging"/>
                <HeaderOptions Icon={Notifications} title="Notifications"/>
                <HeaderOptions avatar={true} title="You" onClick={logOutofApp}/>
                
        </div>

    </div> );
}
 
export default Header;
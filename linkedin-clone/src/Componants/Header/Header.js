import { BusinessCenter, Home, Message, Notifications, Search, SupervisorAccount } from '@material-ui/icons';
import React from 'react';
import './Header.css';
import HeaderOptions from './HeaderOptions';


const Header = () => {
    return ( <div className="Header">


        <div className="header_left">
            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>   
            <div className="header_search">
                {/* SearchIcon  */}
                <Search/>
                <input type="text"/>
            </div>
        </div>
        <div className="header_right">
                <HeaderOptions Icon={Home} title="home"/>
                <HeaderOptions Icon={SupervisorAccount} title="My Network"/>
                <HeaderOptions Icon={BusinessCenter} title="Jobs"/>
                <HeaderOptions Icon={Message} title="Messaging"/>
                <HeaderOptions Icon={Notifications} title="Notifications"/>
                <HeaderOptions avatar="https://yt3.ggpht.com/ytc/AAUvwnjOB8ByAIOKwcQL2sD2_zv6HojbVVpt_iYbmQ1-Og=s900-c-k-c0x00ffffff-no-rj" title="You"/>
                
        </div>

    </div> );
}
 
export default Header;
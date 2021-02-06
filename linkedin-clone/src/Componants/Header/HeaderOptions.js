import { Avatar } from '@material-ui/core';
import React from 'react';
import './HeaderOptions.css';

const HeaderOptions = ({avatar,Icon,title}) => {
    return ( <div className="headerOptions">
                {Icon && <Icon className="headerOption_icon"/>}
                {avatar && (
                    <Avatar className="headerOption_icon" src={avatar}/>
                )
                }
                <h4 className="headerOption_title">{title}</h4>
    </div> );
}
 
export default HeaderOptions
import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './HeaderOptions.css';

const HeaderOptions = ({avatar,Icon,title,onClick}) => {
    const user = useSelector(selectUser);
    return ( <div onClick={onClick} className="headerOptions">
                {Icon && <Icon className="headerOption_icon"/>}
                {avatar && <Avatar className="headerOption_icon" src={user?.photoUrl} />}
                <h4 className="headerOption_title">{title}</h4>
    </div> );
}
 
export default HeaderOptions
import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './Sidebar.css';

const Sidebar = () => {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (   <div className="sidebar">

            <div className="sidebar_top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcBFvwWwx5kb2YQ3-hgYq_LuBMzL_mcm6Ww&usqp=CAU" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar_avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,543</p>
                </div>
                <div className="sidebar_stat">
                <p>Views on Post</p>
                    <p className="sidebar_statNumber">2,443</p>
                </div>
            </div>

                <div className="sidebar_bottom">
                    <p>Recent</p>
                    {recentItem('reactjs')}
                    {recentItem('angularjs')}
                    {recentItem('flutter')}
                </div>
    </div>  );
}
 
export default Sidebar;
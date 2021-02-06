import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (   <div className="sidebar">

            <div className="sidebar_top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcBFvwWwx5kb2YQ3-hgYq_LuBMzL_mcm6Ww&usqp=CAU" alt=""/>
                <Avatar className="sidebar_avatar"/>
                <h2>Sanket Sabale</h2>
                <h4>sanketsabale9767@gmail.com</h4>
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
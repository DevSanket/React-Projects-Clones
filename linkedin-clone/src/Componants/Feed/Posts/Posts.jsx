import { Avatar } from '@material-ui/core';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React from 'react';
import InputOpitions from '../InputOptions';
import './Posts.css';

const Post = ({ name , descreption , photoUrl }) => {
    return ( <div className="post">
            <div className="post_header">
                <Avatar/>
                <div className="post_info">
                    <h2>Sanket Sabale</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className="post_body">
                <p>Message Goes here</p>
            </div>
        <div className="post_buttons">
            <InputOpitions Icon={ThumbUpAltOutlined} title="Like" color="gray"/>
            <InputOpitions Icon={ChatOutlined} title="Comment" color="gray"/>
            <InputOpitions Icon={ShareOutlined} title="Share" color="gray"/>
            <InputOpitions Icon={SendOutlined} title="Send" color="gray"/>
        </div>
    </div> );
}
 
export default Post;
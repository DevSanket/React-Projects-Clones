import { Avatar } from '@material-ui/core';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { forwardRef } from 'react';
import InputOpitions from '../InputOptions';
import './Posts.css';

const Post = forwardRef(({ name , description , photoUrl,message },ref) => {
    return ( <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
        <div className="post_buttons">
            <InputOpitions Icon={ThumbUpAltOutlined} title="Like" color="gray"/>
            <InputOpitions Icon={ChatOutlined} title="Comment" color="gray"/>
            <InputOpitions Icon={ShareOutlined} title="Share" color="gray"/>
            <InputOpitions Icon={SendOutlined} title="Send" color="gray"/>
        </div>
    </div> );
})
 
export default Post;
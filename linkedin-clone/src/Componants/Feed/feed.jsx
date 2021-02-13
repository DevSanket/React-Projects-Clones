import { Input } from '@material-ui/core';
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons';
import React, { useState } from 'react';
import './feed.css';
import InputOpitions from './InputOptions';
import Post from './Posts/Posts';


const sendPost = (e) => {
    e.preventDefault();
    
}


const Feed = () => {
    const [posts,setPosts] = useState([]);
    return ( <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <Create/>
                    <form>
                        <input type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                        
                    </form>
                </div>
                <div className="feed_inputOptions">
                   <InputOpitions title="Photo" Icon={Image} color="#70B5F9" />
                   <InputOpitions title="Video" Icon={Subscriptions} color="#E7A33E" />
                   <InputOpitions title="Event" Icon={EventNote} color="#C0CBCD" />
                   <InputOpitions title="Write Article" Icon={CalendarViewDay} color="#7FC15E" />
                </div>
            </div>
            {/* Posts  */}
            <Post name="sanket sabale" photoUrl="" descreption="THis a basic text" message="wow this is working" />
    </div> );
}
 
export default Feed;
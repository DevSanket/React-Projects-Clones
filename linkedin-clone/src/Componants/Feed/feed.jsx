import { Input } from '@material-ui/core';
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import './feed.css';
import InputOpitions from './InputOptions';
import Post from './Posts/Posts';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from "react-flip-move";





const Feed = () => {
    const user = useSelector(selectUser);
    const [input,setInput] = useState('');
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) => 
        setPosts(
                snapshot.docs.map((doc) => ({
                    id:doc.id,
                    data:doc.data()
                }))
            
        ))
        console.log(posts);
    },[]);

    

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name : user.displayName,
            description : user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        })

    }
    
    return ( 
    
    <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <Create/>
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                        <button onClick={sendPost } type="submit" disabled={!input}>Send</button>
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
            <FlipMove>
            {
                posts.map(({id,data: {name,description,message,photoUrl}}) => (
                    <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl} />
                ))
    
            }
            </FlipMove>
            
    </div> );
}
 
export default Feed;
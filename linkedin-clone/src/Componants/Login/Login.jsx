import { Email } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import './Login.css';


function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [profilePic,SetProfilePic] = useState("");
     const dispatch = useDispatch();
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
          .then(userAuth => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              profileUrl: userAuth.user.photoURL,
            }))
          })
          .catch(error => alert(error));
    }
    const register = () => {
            if(!name){
                return alert("Please Enter Full Name")
            }

            auth.createUserWithEmailAndPassword(email,password)
            .then((userAuth) => {

                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL:profilePic
                })
                .then(() => {
                    dispatch(login({
                        email:userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName:name,
                        photoURL:profilePic,
                    }))
                })
            })
            .catch(error => alert(error.message))
    }
    return (
        <div>
            <div className="login">
                <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt="logo"/>
                <form >
                    <input type="text" 
                    value={name}
                    onChange={(e) => 
                    setName(e.target.value)
                    }
                    placeholder="Full Name (required if registering)"/>
                    <input type="text" 
                    value={profilePic}
                    onChange={
                        e => SetProfilePic(e.target.value)
                    }
                    placeholder="Profile Pic URL (optionl)"/>
                    <input type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"/>
                    <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    />
                    <button type="submit"
                    onClick={loginToApp}
                    > Sign In</button>
                </form>
                <p>Not a member? <span
                className="login_register"
                onClick={register}
                >Register Now</span></p>
            </div>
        </div>
    )
}

export default Login;

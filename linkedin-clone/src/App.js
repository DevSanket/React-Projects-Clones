import Widgets from './Componants/Widget/Widget';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './Componants/Feed/feed';
import Header from './Componants/Header/Header';
import Login from './Componants/Login/Login';
import Sidebar from './Componants/Sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(
      userAuth => {
         if(userAuth){
            //user logged in
            dispatch(login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoURL,
            }))
        }else{
          // user logged out
          dispatch(logout())
        }
      }
    )
  },[dispatch])
  return (
    <div className="App">

      {/* Header  */}
      <Header/>

      {
        !user ? (
            <Login/>
        ):
        (
          <div className="app_body">
          {/* SideBard  */}
          <Sidebar/>
          <Feed/>
          <Widgets/>
     {/* Feed  */}
     {/* Widget  */}
     </div>
        )
      }

      {/* App Body  */}
     
     

    </div>
  );
}

export default App;

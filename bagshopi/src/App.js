import './App.css';
import Header from './Components/Header/Header';
import { Redirect, Route, Switch } from 'react-router';
import HomePage from './Pages/HomePage/homepage';
import Register from './Pages/Register/Register';
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './Redux/user/user.selector';
import { setCurrentUser } from './Redux/user/user.actions';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './Firebase/firebase.util';
import Checkout from './Pages/Checkout/Checkout';
import Orders from './Pages/Orders/orders';
import Contact from './Pages/Contact/Contact';

class App extends React.Component {
  state = { 
    currentUser : null
   }

   unsubscribeFromAuth = null;

   componentDidMount(){
      const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
          });
        }
        setCurrentUser(userAuth);
      });
   }

   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }

  render() { 
    return ( 
      <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <hr/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/register" render={ () =>
          this.props.currentUser ? (
            <Redirect to="/" />
          ):
          (<Register />)
        } />
         <Route exact path="/checkout" component={Checkout}/>
         <Route exact path="/orders" component={Orders} />
         <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
     );
  }
}
 
// Getting current user state
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

//using set state of current user
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);

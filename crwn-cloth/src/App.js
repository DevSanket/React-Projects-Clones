import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./Pages/Homepage/homepage.component";
import ShopPage from "./Pages/Shop/Shop";
import SignInAndSignUpPage from "./Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up";
import React, { Component } from "react";
import { auth, createUserProfileDocument } from "./Firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./Redux/User/user.selector";
import CheckoutPage from "./Pages/Checkout/checkout";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //Adding the userRef in setCurrentUser State
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/* <Header currentUser={this.state.currentUser}/> */}
        {/* after Reducer  */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

//To get the current user of state
const mapStateProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

//using for set State of current user in redux
const mapDispatchProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateProps, mapDispatchProps)(App);

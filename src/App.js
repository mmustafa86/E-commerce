import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
unsubscribeFormAuth =null;

componentDidMount() {
    this.unsubscribeFormAuth=auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <div>
        <Header  currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
export default App;

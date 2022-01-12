import React from 'react';
import "./App.css";
import { Route, Switch } from "react-router";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp'


function App() {
  return (
    <div>
    <Header />
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
    </div>
  );
}

export default App;

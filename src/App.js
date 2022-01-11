import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from './pages/shop/Shop'
import { Route, Switch } from "react-router";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;

import "./App.css";
import HomePage from "./pages/homepage/HomePage";
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
        <Route path="/hatpage" component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;

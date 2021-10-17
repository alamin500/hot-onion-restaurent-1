import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home/Home";
import Login from "./Component/Login/Login/Login";
import Delivery from "./Component/Delivery/Delivery";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/delivery">
            <Delivery></Delivery>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home/Home";
import Login from "./Component/Login/Login/Login";
import Delivery from "./Component/Delivery/Delivery";
import Services from "./Component/Home/Services/Services";
import Doctors from "./Component/Home/Doctors/Doctors";
import Register from "./Component/Home/Register/Register";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
import useAuth from "../src/hooks/useAuth";
function App() {
  const user = useAuth();
  console.log(user);
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            {/* {user.email ? (
              <Route path="/home">
                <Home></Home>
              </Route>
            ) : (
              <Redirect to="/login" />
            )} */}

            <Route path="/service">
              <Services></Services>
            </Route>
            <Route path="/doctor">
              <Doctors></Doctors>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            {/* <PrivateRoute path="/home">
              <Home></Home>
            </PrivateRoute> */}
            <Route path="/delivery">
              <Delivery></Delivery>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

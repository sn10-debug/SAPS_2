import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./contact";
import About from "./About";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

class Dashboard extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar></NavBar>

          <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/signUp" component={SignUpForm}></Route>
            <Route path="/logIn" component={LoginForm}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Dashboard;

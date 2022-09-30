import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./contact";
import About from "./About";

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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Dashboard;

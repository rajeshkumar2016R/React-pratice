import React from "react";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import { Route } from "react-router-dom";

const RouteSetup = () => {
  return (
    <div>
      <Nav/>
      <Route path="/"exact={true} >
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
     
    </div>
  );
};

export default RouteSetup;

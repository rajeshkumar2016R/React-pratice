import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import DynamicRoutingUser from "./DynamicRoutingUser";
const DynamicRouting = () => {
  const users = [
    { id: 1, name: "Rajesh", email: "Rajesh@gmail.com" },
    { id: 2, name: "Raja", email: "Raja@gmail.com" },
    { id: 3, name: "abinesh", email: "abinesh@gmail.com" },
    { id: 4, name: "Raj", email: "Raj@gmail.com" },
  ];

  return (
    <div>
      <Router>
        <h1>Dynamic Routing</h1>
        {users.map((item) => (
          <Link to={'/DynamicRoutingUser/'+ item.id+'/'+item.name}><h3>{item.name}</h3></Link>
        ))}
        <Route path='/DynamicRoutingUser/:id/:name'><DynamicRoutingUser /></Route>
      </Router>
    </div>
  );
};

export default DynamicRouting;

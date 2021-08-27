import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Intro from "./pages/Intro/Intro.js";
import Map from "./pages/Map/Map.js";

function App() {
  return (
    <Router>
      <Route path='/' exact component={Intro}></Route>
      <Route path='/story' component={Map}></Route>
    </Router>
  );
}

export default App;

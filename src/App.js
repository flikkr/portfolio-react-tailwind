import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./pages/Intro.js";
import Map from "./pages/map/map";
import TestMap from "./pages/map/test-map";

function App() {
  return (
    <Router>
      <Route path='/' exact component={Intro}></Route>
      <Route path='/story' component={Map}></Route>
      <Route path='/test' component={TestMap}></Route>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./pages/Intro.js";
import Map from "./pages/map/map";

function App() {
  return (
    <Router>
      <Route path='/' exact component={Intro}></Route>
      <Route path='/story' component={Map}></Route>
    </Router>
  );
}

export default App;

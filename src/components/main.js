import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Opening from "../components/opening";
import Portfolio from "../components/portfolio";
import About from "../components/about";

const Main = () => (
  <Router>
    <main>
      <Switch>
        <Route exact path="/" component={Opening} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
      </Switch>
    </main>
  </Router>
);

export default Main;

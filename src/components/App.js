import React, { Component } from "react";
import Todos from "./Todos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./NoMatch";
import Details from "./Details";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Todos} />
            <Route path="/:todoId" component={Details} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Articles from "./Articles";
import Comments from "./Comments";

export default class App extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path="/" component={HelloWorld} /> */}
        <Route exact path="/" component={Articles} />
        <Route exact path="/comments" component={Comments} />
      </Switch>
    );
  }
}

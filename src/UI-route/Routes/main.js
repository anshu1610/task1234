import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import ScreenInterface from "../../UI-pages/ScreenInterface/screenInterface"

class Routes extends Component {
  render() {
    // let pathVariable = window.location.pathname;
    // console.log(pathVariable)
    return (
      <div>
        <Router>
          <Route exact path={`/screen-interface/:path`} component={ScreenInterface} />
        </Router>
      </div>
    );
  }
}

export default Routes;

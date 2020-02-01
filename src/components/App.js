import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import AdoptionPage from "../routes/AdoptionPage";
import WelcomePage from "../routes/WelcomePage";
import RequestFormPage from "../routes/RequestFormPage";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path={"/request"} component={RequestFormPage} />
          <Route path={"/adoptions"} component={AdoptionPage} />
        </Switch>
      </div>
    );
  }
}
export default App;

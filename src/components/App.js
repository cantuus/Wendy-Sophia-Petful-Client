import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import CatAdoptionPage from "../routes/CatAdoptionPage";
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
          <Route path={"/cat-adoptions"} component={CatAdoptionPage} />
        </Switch>
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AdoptionPage from "../routes/AdoptionPage";
import WelcomePage from "../routes/WelcomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path={"/adoptions"} component={AdoptionPage} />
        </Switch>
      </div>
    );
  }
}
export default App;

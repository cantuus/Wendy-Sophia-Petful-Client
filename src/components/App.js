import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import AdoptionPage from "../routes/AdoptionPage";
import WelcomePage from "../routes/WelcomePage";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path={"/adoptions"} component={AdoptionPage} />
      </>
    );
  }
}
export default App;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "../routes/WelcomePage";
import RequestFormPage from "../routes/RequestFormPage";
import CatAdoptionPage from "../routes/CatAdoptionPage";
import DogAdoptionPage from "../routes/DogAdoptionPage";
import SummaryPage from "../routes/SummaryPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path={"/request"} component={RequestFormPage} />
          <Route path={"/cat-adoptions"} component={CatAdoptionPage} />
          <Route path={"/dog-adoptions"} component={DogAdoptionPage} />
          <Route path={"/summary"} component={SummaryPage} />
        </Switch>
      </div>
    );
  }
}
export default App;

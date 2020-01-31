import React, { Component } from "react";
import "./AdoptionPage.css";
import PetApiService from "../services/pet-api-services";
class AdoptionPage extends Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    }
  };

  componentDidMount() {
    PetApiService.getCats().then(this.setState);
  }

  render() {
    return (
      <div className="AdoptionPage__animals">
        <h2>Next available cat</h2>

        <h2>Next available dog</h2>
      </div>
    );
  }
}

export default AdoptionPage;

import React, { Component } from "react";
import PetApiService from "../services/pet-api-services";
import PetContext from "../context/PetContext";

class CatList extends Component {
  static contextType = PetContext;

  showCats = () => {
    const { nextCat } = this.context;
    PetApiService.getCats().then(response => {
      // console.log(response);
      PetApiService.displayCats(response).then(dispRes => {
        console.log(dispRes);
        this.context.setAllCats(dispRes);
      });
    });
  };

  componentDidMount() {
    PetApiService.reloadCats().then(() => {
      this.showCats();
    });
  }
  render() {
    return <p>hi</p>;
  }
}

export default CatList;

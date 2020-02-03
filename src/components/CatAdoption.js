import React, { Component } from "react";
import PetApiService from "../services/pet-api-services";
import PetContext from "../context/PetContext";
import Queue from "../Queue";

class CatAdoption extends Component {
  static contextType = PetContext;

  updateCat = () => {
    PetApiService.getCats()
      .then(response => {
        console.log(response.cat);
        this.context.setCat(response.cat);
      })
      .then(cat => {
        PetApiService.deleteCat().then(() => {
          if (!this.context.yourTurn) {
            setTimeout(() => {
              this.updateCat();
            }, 7000);
          }
        });
      })
      .catch({
        error: "an error came up"
      });
  };

  componentDidMount() {
    PetApiService.reloadCats().then(() => {
      this.updateCat();
    });
  }

  enableAdoptButton(pet) {
    return (
      <>
        <button
          type="button"
          disabled={!this.state.current.touched && !this.state.yourTurn}
        >
          Adopt Me!
        </button>
      </>
    );
  }

  render() {
    const { cat } = this.props;

    return (
      <section className="cat-item">
        <img
          className="cat-picture"
          src={cat.imageUrl}
          alt={`picture of ${cat.name}`}
        />
        <ul>
          <li>Description: {cat.imageDescription}</li>
          <li>Sex: {cat.sex}</li>
          <li>Age: {cat.age}</li>
          <li>Breed: {cat.breed}</li>
          <li>Story: {cat.story}</li>
          <li>Date Admitted: {cat.date_admitted}</li>
        </ul>
      </section>
    );
  }
}

export default CatAdoption;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetApiService from "../services/pet-api-services";
import PetContext from "../context/PetContext";

class CatAdoption extends Component {
  static contextType = PetContext;

  updateCat = () => {
    const { catWaitlist } = this.context;

    catWaitlist.shift();

    PetApiService.getCats()
      .then(response => {
        this.context.setCat(response.cat);
      })
      .then(cat => {
        PetApiService.deleteCat().then(() => {
          if (catWaitlist.length > 1) {
            setTimeout(() => {
              this.updateCat();
            }, 2000);
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

  render() {
    const { cat } = this.props;

    return (
      <section className="cat-item">
        <Link to="/request">
          <img className="cat-picture" src={cat.imageUrl} alt={cat.name} />
        </Link>
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

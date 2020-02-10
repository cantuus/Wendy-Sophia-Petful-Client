import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetApiService from "../services/pet-api-services";
import PetContext from "../context/PetContext";

class DogAdoption extends Component {
  static contextType = PetContext;

  updateDog = () => {
    const { dogWaitlist } = this.context;

    dogWaitlist.shift();

    PetApiService.getDogs()
      .then(response => {
        this.context.setDog(response.dog);
      })
      .then(dog => {
        PetApiService.deleteDog().then(() => {
          if (dogWaitlist.length > 1) {
            setTimeout(() => {
              this.updateDog();
            }, 2000);
          }
        });
      })
      .catch({
        error: "an error came up"
      });
  };

  componentDidMount() {
    PetApiService.reloadDogs().then(() => {
      this.updateDog();
    });
  }

  render() {
    const { dog } = this.props;

    return (
      <section className="dog-item">
        <Link to="/request">
          <img className="dog-picture" src={dog.imageUrl} alt={dog.name} />
        </Link>
        <ul>
          <li>Description: {dog.imageDescription}</li>
          <li>Sex: {dog.sex}</li>
          <li>Age: {dog.age}</li>
          <li>Breed: {dog.breed}</li>
          <li>Story: {dog.story}</li>
          <li>Date Admitted: {dog.date_admitted}</li>
        </ul>
      </section>
    );
  }
}

export default DogAdoption;

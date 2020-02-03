import React, { Component } from "react";
import PetApiService from "../services/pet-api-services";
import PetContext from "../context/PetContext";

class DogAdoption extends Component {
  static contextType = PetContext;

  // componentDidMount() {
  //   this.context.clearError();
  //   PetApiService.getDogs()
  //     .then(this.context.setDog)
  //     .catch(this.context.setError);
  //   console.log(this.context);
  // }

  // componentWillUnmount() {
  //   PetApiService.getDogs();
  // }

  adoptDog() {
    console.log("pet adopted");
    PetApiService.deleteDog().then(PetApiService.getDogs());
  }

  enableAdoptButton() {
    return (
      <>
        {/* disabled={!this.state.current.touched && !this.state.yourTurn} */}
        <button type="button" onClick={this.adoptDog}>
          Adopt Me!
        </button>
      </>
    );
  }
  render() {
    const { dog } = this.props;
    return (
      <section className="pet-info">
        <img
          className="pet-picture"
          src={dog.imageUrl}
          alt={`picture of ${dog.name}`}
        />
        <ul>
          <li>Description: {dog.imageDescription}</li>
          <li>Sex: {dog.sex}</li>
          <li>Age: {dog.age}</li>
          <li>Breed: {dog.breed}</li>
          <li>Story: {dog.story}</li>
          <li>Date Admitted: {dog.date_admitted}</li>
        </ul>
        {this.enableAdoptButton()}
      </section>
    );
  }
}

export default DogAdoption;

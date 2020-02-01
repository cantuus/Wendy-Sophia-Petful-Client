import React, { Component } from "react";

class DogAdoption extends Component {
  render() {
    const { dog } = this.props;
    return (
      <section className="cat-item">
        <img
          className="cat-picture"
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
      </section>
    );
  }
}

export default DogAdoption;

import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import PetContext from "../context/PetContext";

class SummaryPage extends Component {
  static contextType = PetContext;

  renderDogSummary() {
    const { dogAdopter, dog, resetDogPerson } = this.context;
    return (
      <>
        <img src={dog.imageUrl} />
        <h3>Congratulations {dogAdopter}!</h3>
        <p>
          You have just adopted {dog.name}, a {dog.age} year old {dog.sex}{" "}
          {dog.breed}!
        </p>
        <p>
          We will contact you in the next 24 hours for further adoption details.
        </p>
        <Link to="/">
          <button onClick={() => resetDogPerson()}>Go back to home page</button>
        </Link>
      </>
    );
  }

  renderCatSummary() {
    const { catAdopter, cat, resetCatPerson } = this.context;
    return (
      <>
        <img src={cat.imageUrl} />
        <h3>Congratulations {catAdopter}!</h3>
        <p>
          You have just adopted {cat.name}, a {cat.age} year old {cat.sex}{" "}
          {cat.breed}!
        </p>
        <p>
          We will contact you in the next 24 hours for further adoption details.
        </p>
        <Link to="/">
          <button onClick={() => resetCatPerson()}>Go back to home page</button>
        </Link>
      </>
    )
  }

  render() {
    const { catAdopter, dogAdopter } = this.context;
    return (
      <>
        {catAdopter && this.renderCatSummary()}
        {dogAdopter && this.renderDogSummary()}
      </>
    )
  }
}

export default SummaryPage;

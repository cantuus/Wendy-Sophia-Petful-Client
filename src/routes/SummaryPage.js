import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetContext from "../context/PetContext";

class SummaryPage extends Component {
  static contextType = PetContext;

  render() {
    const { catAdopter, cat } = this.context;
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
          <button>Go back to home page</button>
        </Link>
      </>
    );
  }
}

export default SummaryPage;

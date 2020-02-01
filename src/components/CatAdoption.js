import React from "react";
import Queue from "../Queue";

class CatAdoption extends React.Component {
  render() {
    return (
      <section className="cat-item">
        <img
          className="cat-picture"
          src={this.props.cat.imageUrl}
          alt={`picture of ${this.props.cat.name}`}
        />
        <ul>
          <li>Description: {this.props.cat.imageDescription}</li>
          <li>Sex: {this.props.cat.sex}</li>
          <li>Age: {this.props.cat.age}</li>
          <li>Breed: {this.props.cat.breed}</li>
          <li>Story: {this.props.cat.story}</li>
          <li>Date Admitted: {this.props.cat.date_admitted}</li>
        </ul>
      </section>
    );
  }
}

export default CatAdoption;

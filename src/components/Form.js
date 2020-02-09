import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetContext from "../context/PetContext";
import "./Form.css";
export default class Form extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  static contextType = PetContext;

  state = {
    catAdopter: ""
  };

  handleSubmitCat = e => {
    e.preventDefault();
    const { setCatWaitlist, setCatPerson } = this.context;
    const { catName } = e.target;
    setCatWaitlist(catName.value);
    setCatPerson(catName.value);
    catName.value = "";
  };

  handleSubmitDog = e => {
    e.preventDefault();
    const { setDogWaitlist } = this.context;
    const { dogName } = e.target;
    setDogWaitlist(dogName.value);

    dogName.value = "";
  };

  render() {
    return (
      <div className="form-container">
        <form className="adoption-form" onSubmit={this.handleSubmitCat}>
          <label htmlFor="Form_name">Adopt-a-Cat</label>
          <input
            type="text"
            aria-label="name input field"
            className="add-name-input"
            name="catName"
            id="Form_name"
            onChange={e => this.setState({ catAdopter: e.target.value })}
          />
          <button type="submit">Join waiting list</button>

          <Link to="/cat-adoptions">
            <button>See available cats!</button>
          </Link>
        </form>

        <form className="adoption-form" onSubmit={this.handleSubmitDog}>
          <label htmlFor="Form_name">Adopt-a-Dog</label>
          <input
            type="text"
            aria-label="name input field"
            className="add-name-input"
            name="dogName"
            id="Form_name"
          />
          <button type="submit">Join waiting list</button>
          <Link to="/dog-adoptions">
            <button>See available dogs!</button>
          </Link>
        </form>
      </div>
    );
  }
}

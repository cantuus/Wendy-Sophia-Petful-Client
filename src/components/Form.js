import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetContext from "../context/PetContext";
import "./Form.css";
export default class Form extends Component {
  static defaultProps = {
    onRedirect: () => {}
  };
  static contextType = PetContext;

  handleSubmitCat = e => {
    e.preventDefault();
    const { setCatWaitlist } = this.context;
    const { catName } = e.target;
    setCatWaitlist(catName.value);
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
      <>
        <form className="adoption-form" onSubmit={this.handleSubmitCat}>
          <label htmlFor="Form_name">
            Add Name to Cat Adoption Waiting List
          </label>
          <input
            required
            type="text"
            aria-label="name input field"
            className="add-name-input"
            name="catName"
            id="Form_name"
          />
          <button type="submit">Join waiting list</button>
        </form>
        <Link to="/cat-adoptions">
          <button>See available cats!</button>
        </Link>

        <form className="adoption-form" onSubmit={this.handleSubmitDog}>
          <label htmlFor="Form_name">
            Add Name to Dog Adoption Waiting List
          </label>
          <input
            required
            type="text"
            aria-label="name input field"
            className="add-name-input"
            name="dogName"
            id="Form_name"
          />
          <button type="submit">Join waiting list</button>
        </form>
        <Link to="/dog-adoptions">
          <button>See available cats!</button>
        </Link>
      </>
    );
  }
}

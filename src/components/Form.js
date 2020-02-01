import React, { Component } from "react";
import "./Form.css";
export default class Form extends Component {
  // state = {
  //   people: [],
  //   person: ""
  // };

  handleSubmit = e => {
    e.preventDefault();

    // const { people, person } = this.state;
    // this.setState([...people, person]);

    console.log(this.state);
  };

  addPerson = person => {
    this.setState({ people: [...this.state.people, person] });
  };

  render() {
    const { people, person } = this.state;

    return (
      <form className="adoption-form" onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="Form_name">Name of New Pet Parent</label>
        <input
          required
          type="text"
          aria-label="name input field"
          className="add-name-input"
          name="name"
          id="Form_name"
          onChange={e => this.addPerson(e.target.value)}
        />
        <button type="submit" onClick={e => this.handleSubmit(e)}>
          Join waiting list
        </button>
      </form>
    );
  }
}

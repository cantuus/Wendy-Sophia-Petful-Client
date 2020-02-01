import React, {Component} from 'react';

export default class Form extends Component {
  state = {people: ['Ann','Bob','Clara','Dana','Eli']}  

  handleSubmit = e => {
    e.preventDefault();

    const {name_field} = e.target
    const {people} = this.state;

    this.setState(...people, name_field)

  }

  render() {
    return ( 
     <form className="adoption-form" onSubmit={this.handleSubmit}>
      <label htmlFor="Form_name">Name of New Pet Parent</label> 
      <input required type="text" aria-label="name input field" className="add-name-input" name="name_field" id="Form_name"/>
      <button type="submit">Join waiting list</button>
    </form>
    )
  }
}
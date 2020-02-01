import React, { Component } from "react";
import "./AdoptionPage.css";
import { adoptionQueue, namesList } from "../Queue";
import PetApiService from "../services/pet-api-services";
import PeopleList from "../components/peopleList";
import CatAdoption from "../components/cat";
// import DogAdoption from "../components/dog"

import "./AdoptionPage.css";

class AdoptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: ["wendy", "sophia"],
      cat: {},
      dog: {}
    };
  }

  static defaultProps = {
    history: {
      goBack: () => {}
    }
  };

  handleName = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  submitName = e => {
    e.preventDefault();
    let ownerName = this.state.name;
    adoptionQueue.enqueue(ownerName);
    this.setState({
      registered: true,
      numInLine: adoptionQueue.length
    });
  };

  showOwnershipMessage = () => {
    if (this.state.currentNewOwner && !this.state.turnToAdopt) {
      return `Congrats to ${this.state.currentNewOwner} and their new pet ${this.state.currentPet}`;
    }
  };

  componentDidMount() {
    PetApiService.getCats()
      .then(cat =>
        this.setState({
          cat: cat
        })
      )
      .catch({
        error: "an error came up"
      });
    PetApiService.getDogs()
      .then(dog =>
        this.setState({
          dog: dog
        })
      )
      .catch({
        error: "an error came up"
      });
  }

  // showAdoptButton(index) {
  //   if(this.state.turnToAdopt && index === 0){
  //     return(
  //       <button type='button' disabled={!this.state.turnToAdopt} onClick={this}
  //     )
  //   }
  // }
  renderWaitlist() {
    return (
      <div className="AdoptionPage__list-container">
        <h2>Waitlist</h2>
        <ul className="people-list">
          {this.state.people.map(person => (
            <PeopleList person={person} />
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { people } = this.state;
    return (
      <div className="AdoptionPage__animals">
        {people.length && this.renderWaitlist()}
        <h2>Next available cat</h2>
        <CatAdoption cat={this.state.cat} />
        <h2>Next available dog</h2>
        {/* <DogAdoption
          dog={this.state.dogs}
        /> */}
      </div>
    );
  }
}

export default AdoptionPage;

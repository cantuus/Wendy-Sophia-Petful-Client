import React, { Component } from "react";
import "./AdoptionPage.css";
import { adoptionQueue, namesList } from "../Queue";
import PetApiService from "../services/pet-api-services";
import PeopleList from "../components/peopleList";
import CatAdoption from "../components/CatAdoption";
import DogAdoption from "../components/DogAdoption";

import "./AdoptionPage.css";
import { withRouter } from "react-router-dom";

class AdoptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: ["Wendy", "Sophia", "Ruckus"],
      cat: {},
      dog: {},
      yourTurn: false,
      current: {
        person: "",
        touched: false
      }
    };
  }
  static defaultProps = {
    history: {
      goBack: () => { }
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

  updateCat = () => {
    PetApiService.getCats()
      .then(response => {
        console.log('this is', response.cat);
        this.setState({
          cat: response.cat,
          yourTurn: response.yourTurn
        })
      })
      .then(cat => {
          PetApiService.deleteCat().then(() => {
            if (!this.state.yourTurn) {
              setTimeout(() => {
                this.updateCat();
              }, 3000);
            }
          });
      })
      .catch({
        error: "an error came up"
      });
  }

  componentDidMount() {
    PetApiService.reloadCats().then(() => {
      this.updateCat();
    });
    // PetApiService.getDogs()
    //   .then(dog => {
    //     this.setState({
    //       dog: dog
    //     })
    //     PetApiService.deleteDog()
    //       .then(dog => {
    //         dog
    //       })
    //   })
    //   .catch({
    //     error: "an error came up"
    //   });
  }

  enableAdoptButton(pet) {
    return (
      <>
        <button type="button" disabled={!this.state.current.touched && !this.state.yourTurn}>
          Adopt Me!
        </button>
      </>
    );
  }

  renderWaitlist() {
    return (
      <div className="AdoptionPage__list-container">
        <h2>Waitlist</h2>
        <ul className="people-list">
          {this.state.people.map((person, idx) => (
            <PeopleList key={idx} person={person} />
          ))}
        </ul>
      </div>
    );
  }

  renderCat() {
    return (
      <div className="AdoptionPage__cat">
        <h2>Meet {this.state.cat.name}</h2>
        <CatAdoption cat={this.state.cat} />
        {this.enableAdoptButton()}
      </div>
    );
  }

  renderDog() {
    return (
      <div className="AdoptionPage__dog">
        <h2>Meet {this.state.dog.name}</h2>
        <DogAdoption dog={this.state.dog} />
        {this.enableAdoptButton()}
      </div>
    );
  }

  render() {
    const { people, cat, dog } = this.state;
    return (
      <div className="AdoptionPage__animals">
        {people.length && this.renderWaitlist()}
        {cat && this.renderCat()}
        {dog && this.renderDog()}
      </div>
    );
  }
}

export default AdoptionPage;

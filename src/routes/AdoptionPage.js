import React, { Component } from "react";
import "./AdoptionPage.css";
import { adoptionQueue, namesList } from "../Queue";
import PetApiService from "../services/pet-api-services";
import PetContext from "../context/PetContext";
import PeopleList from "../components/peopleList";
import CatAdoption from "../components/CatAdoption";
import DogAdoption from "../components/DogAdoption";

import "./AdoptionPage.css";
import { withRouter } from "react-router-dom";

class AdoptionPage extends Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    }
  };

  static contextType = PetContext;

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

  updateDog = () => {
    PetApiService.getDogs().then(response => {
      console.log("this is", response.cat);
      this.setState({
        dog: response.dog
        // yourTurn: response.yourTurn
      });
    });
    // .then(dog => {
    //   PetApiService.deleteDog().then(() => {
    //     // if (!this.state.yourTurn) {
    //     setTimeout(() => {
    //       this.updateDog();
    //     }, 3000);
    //     // }
    //   });
    // })
    // .catch({
    //   error: "an error came up"
    // });
  };

  componentDidMount() {
    this.context.clearError();
    PetApiService.getDogs()
      .then(this.context.setDog)
      .then(() => this.updateDog())
      .catch(this.context.setError);
    console.log(this.context);
  }

  // deleteCat = () => {
  //   PetApiService.deleteCat();
  // };

  enableAdoptButton(pet) {
    return (
      <>
        {/* disabled={!this.state.current.touched && !this.state.yourTurn} */}
        <button type="button">Adopt Me!</button>
      </>
    );
  }

  renderWaitlist() {
    const { waitlist } = this.context;
    return (
      <div className="AdoptionPage__list-container">
        <h2>Waitlist</h2>
        <ul className="people-list">
          {waitlist.map((person, idx) => (
            <PeopleList key={idx} person={person} />
          ))}
        </ul>
      </div>
    );
  }
  removePerson(idx) {
    const newWaitlist = this.context.Waitlist.filter(index => index !== idx);

    this.setState({
      waitlist: [...newWaitlist]
    });
  }
  renderCat() {
    const { cat } = this.context;
    return (
      <div className="AdoptionPage__cat">
        <h2>Meet {cat.name}</h2>
        <CatAdoption cat={cat} />
        {this.enableAdoptButton()}
      </div>
    );
  }

  renderDog() {
    const { dog } = this.context;

    return (
      <div className="AdoptionPage__dog">
        <h2>Meet {dog.name}</h2>
        <DogAdoption dog={dog} />
      </div>
    );
  }

  render() {
    const { waitlist, cat, dog } = this.context;

    return (
      <div className="AdoptionPage__container">
        <h3>Next up to adopt: {waitlist[0]}</h3>
        <div className="AdoptionPage__animals">
          {waitlist.length && this.renderWaitlist()}
          {cat && this.renderCat()}
          {dog && this.renderDog()}
        </div>
      </div>
    );
  }
}

export default AdoptionPage;

import React, { Component } from "react";
import "./AdoptionPage.css";
import { adoptionQueue, namesList } from "../Queue";
import PetApiService from "../services/pet-api-services";
import PetContext from "../context/PetContext";
import PeopleList from "../components/peopleList";
import CatAdoption from "../components/CatAdoption";
import CatList from "../components/CatList";
import DogAdoption from "../components/DogAdoption";
import "./CatAdoptionPage.css";
import { withRouter } from "react-router-dom";

class CatAdoptionPage extends Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    }
  };

  static contextType = PetContext;

  // handleName = e => {
  //   this.setState({
  //     firstName: e.target.value
  //   });
  // };

  // submitName = e => {
  //   e.preventDefault();
  //   let ownerName = this.state.name;
  //   adoptionQueue.enqueue(ownerName);
  //   this.setState({
  //     registered: true,
  //     numInLine: adoptionQueue.length
  //   });
  // };

  // showOwnershipMessage = () => {
  //   if (this.state.currentNewOwner && !this.state.turnToAdopt) {
  //     return `Congrats to ${this.state.currentNewOwner} and their new pet ${this.state.currentPet}`;
  //   }
  // };

  enableAdoptButton(pet) {
    return (
      <>
        {/* disabled={!this.state.current.touched && !this.state.yourTurn} */}
        <button type="button">Adopt Me!</button>
      </>
    );
  }

  renderWaitlist = () => {
    const { catWaitlist } = this.context;
    // console.log(catWaitlist);
    // catWaitlist.shift();
    // console.log(catWaitlist);
    // setTimeout(() => {
    //   this.renderWaitlist();
    // }, 2000);
    return (
      <div className="AdoptionPage__list-container">
        <h2>Waitlist</h2>
        <ul className="people-list">
          {catWaitlist.map((person, idx) => (
            <PeopleList key={idx} person={person} />
          ))}
        </ul>
      </div>
    );
  };
  // removePerson(idx) {
  //   const newWaitlist = this.context.Waitlist.filter(index => index !== idx);

  //   this.setState({
  //     waitlist: [...newWaitlist]
  //   });
  // }
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

  render() {
    const { catWaitlist, cat, nextCats } = this.context;

    return (
      <div className="AdoptionPage__container">
        {catWaitlist.length ? (
          <h3>
            <div className="next-person">{catWaitlist[0]}</div>
            You're next in line!
          </h3>
        ) : (
          <h3>This cat is waiting for a home...Join the waiting list.</h3>
        )}
        <div className="AdoptionPage__animals">
          {catWaitlist.length && this.renderWaitlist()}
          {cat && this.renderCat()}
        </div>
        <CatList />
      </div>
    );
  }
}

export default CatAdoptionPage;

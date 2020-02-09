import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetContext from "../context/PetContext";
import PeopleList from "../components/peopleList";
import CatAdoption from "../components/CatAdoption";
import CatList from "../components/CatList";

import "./CatAdoptionPage.css";
import PetApiService from "../services/pet-api-services";

class CatAdoptionPage extends Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    }
  };

  static contextType = PetContext;

  state = {
    adoptionComplete: false
  };
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

  handleAdoption() {
    this.setState({ adoptionComplete: true });

    console.log(this.state.adoptionComplete);
  }

  renderMessage() {
    return <div>Congrats to $ and their new pet</div>;
  }
  enableAdoptButton() {
    const { catAdopter, catWaitlist } = this.context;
    return (
      <>
        {catAdopter === catWaitlist[0] ? (
          <button type="button" onClick={() => this.handleAdoption()}>
            Adopt Me!
          </button>
        ) : (
          ""
        )}
      </>
    );
  }

  renderWaitlist = () => {
    const { catWaitlist } = this.context;

    return (
      <div className="AdoptionPage__list-container">
        <ul className="people-list">
          {catWaitlist.map((person, idx) => (
            <PeopleList key={idx} person={person} />
          ))}
        </ul>
      </div>
    );
  };

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
    const { catAdopter, catWaitlist, cat } = this.context;

    return (
      <div className="AdoptionPage__container">
        {catWaitlist.length ? (
          <h3>
            <div className="next-person">{catWaitlist[0]}</div>
            Meet your new cat!
            {catAdopter === catWaitlist[0] ? (
              <p>Click the Adopt Me button below</p>
            ) : (
              ""
            )}
          </h3>
        ) : (
          <h3>This cat is waiting for a home...Join the waiting list.</h3>
        )}
        <div className="AdoptionPage__animals">{cat && this.renderCat()}</div>
        <h2>Waitlist</h2>
        <div className="CatAdoption__waitlist">
          {catWaitlist.length ? (
            this.renderWaitlist()
          ) : (
            <Link to="/request">
              <button>Join the waitlist</button>
            </Link>
          )}
        </div>
        <h3>More Available Cats</h3>
        <CatList />
      </div>
    );
  }
}

export default CatAdoptionPage;

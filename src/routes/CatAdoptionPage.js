import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetContext from "../context/PetContext";
import PeopleList from "../components/peopleList";
import CatAdoption from "../components/CatAdoption";
import CatList from "../components/CatList";

import "./CatAdoptionPage.css";

class CatAdoptionPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  static contextType = PetContext;

  state = {
    adoptionComplete: false
  };

  handleAdoption() {
    this.setState({ adoptionComplete: true });
    this.props.history.push("/summary");
  }
  renderWaitlistMessage() {
    const { catAdopter, catWaitlist } = this.context;
    return (
      <h3>
        {!!catWaitlist.length ? (
          <div className="next-person">
            {catWaitlist[0]}, meet your new cat!
          </div>
        ) : (
          <div>
            This cat is waiting for a new home. Join the waitlist to adopt this
            next cat!
          </div>
        )}

        {catAdopter === catWaitlist[0] ? (
          <p>Click the Adopt Me button below to complete the adoption</p>
        ) : (
          ""
        )}
      </h3>
    );
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
    const { cat } = this.context;

    return (
      <div className="AdoptionPage__container">
        {/* When user is the first in the Queue, a message will render to instruct the user to click the button to adopt the next cat. */}
        {this.renderWaitlistMessage()}

        <div className="AdoptionPage__animals">{cat && this.renderCat()}</div>

        <h2>Waitlist</h2>
        <div className="CatAdoption__waitlist">{this.renderWaitlist()}</div>

        <Link to="/request">
          <button>Join the waitlist</button>
        </Link>
        <h3>More Available Cats</h3>
        <CatList />
      </div>
    );
  }
}

export default CatAdoptionPage;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetContext from "../context/PetContext";
import PeopleList from "../components/peopleList";
import DogAdoption from "../components/DogAdoption";
import DogList from "../components/DogList";

import "./DogAdoptionPage.css";

class DogAdoptionPage extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    };

    static contextType = PetContext;

    state = {
        adoptionComplete: false,
        choseDog: false
    };

    handleAdoption() {
        this.setState({
            adoptionComplete: true,
            choseDog: !this.state.choseDog
        });

    }
    renderWaitlistMessage() {
        const { dogAdopter, dogWaitlist } = this.context;
        return (
            <h3>
                {!!dogWaitlist.length ? (
                    <div className="next-person">
                        {dogWaitlist[0]}, meet your new dog!
          </div>
                ) : (
                        <div>
                            This dog is waiting for a new home. Join the waitlist to adopt this
                            next dog!
          </div>
                    )}

                {dogAdopter === dogWaitlist[0] ? (
                    <p>Click the Adopt Me button below to complete the adoption</p>
                ) : (
                        ""
                    )}
            </h3>
        );
    }

    enableAdoptButton() {
        const { dogAdopter, dogWaitlist } = this.context;
        return (
            <>
                {dogAdopter === dogWaitlist[0] ? (
                    <Link to="/summary" chosedog={this.state.choseDog}>
                        <button type="button" onClick={() => this.handleAdoption()}>
                            Adopt Me!
                        </button>
                    </Link>
                ) : (
                        ""
                    )}
            </>
        );
    }

    renderWaitlist = () => {
        const { dogWaitlist } = this.context;

        return (
            <div className="AdoptionPage__list-container">
                <ul className="people-list">
                    {dogWaitlist.map((person, idx) => (
                        <PeopleList key={idx} person={person} />
                    ))}
                </ul>
            </div>
        );
    };

    renderDog() {
        const { dog } = this.context;
        return (
            <div className="AdoptionPage__dog">
                <h2>Meet {dog.name}</h2>
                <DogAdoption dog={dog} />
                {this.enableAdoptButton()}
            </div>
        );
    }

    render() {
        const { dog } = this.context;

        return (
            <div className="AdoptionPage__container">
                {/* When user is the first in the Queue, a message will render to instruct the user to click the button to adopt the next dog. */}
                {this.renderWaitlistMessage()}

                <div className="AdoptionPage__animals">{dog && this.renderDog()}</div>

                <h2>Waitlist</h2>
                <div className="DogAdoption__waitlist">{this.renderWaitlist()}</div>

                <Link to="/request">
                    <button>Join the waitlist</button>
                </Link>
                <h3>More Available Dogs</h3>
                <DogList />
            </div>
        );
    }
}

export default DogAdoptionPage;

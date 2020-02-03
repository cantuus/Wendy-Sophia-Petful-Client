import React, { Component } from "react";

const PetContext = React.createContext({
  catWaitlist: [],
  dogWaitlist: [],
  cat: {},
  dog: {},
  addPerson: () => {},
  setCat: () => {},
  setDog: () => {},
  setError: () => {},
  setCatWaitlist: () => {},
  setDogWaitlist: () => {},
  clearError: () => {}
});

export default PetContext;

export class PetProvider extends Component {
  state = {
    catWaitlist: ["Wendy", "Sophia", "Rafe", "Anna"],
    dogWaitlist: ["Hannah", "Joanna", "Joe", "Rich"],
    cat: {},
    dog: {},
    yourTurn: false,
    current: {
      person: "",
      touched: false
    }
  };

  // addPerson = person => {
  //   this.setWaitlist([...this.state.waitlist, person]);
  // };

  setCatWaitlist = person => {
    this.setState({ catWaitlist: [...this.state.catWaitlist, person] });
  };

  setDogWaitlist = person => {
    this.setState({ dogWaitlist: [...this.state.dogWaitlist, person] });
  };

  setCat = cat => {
    this.setState({ cat });
  };

  setDog = dog => {
    this.setState({ dog });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };
  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      waitlist: this.state.waitlist,
      cat: this.state.cat,
      dog: this.state.dog,
      currentPerson: this.state.currentPerson,
      addPerson: this.addPerson,
      setCat: this.setCat,
      setDog: this.setDog,
      setWaitlist: this.setWaitlist,
      setError: this.setError,
      clearError: this.clearError
    };
    return (
      <PetContext.Provider value={value}>
        {this.props.children}
      </PetContext.Provider>
    );
  }
}

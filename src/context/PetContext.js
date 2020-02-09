import React, { Component } from "react";

const PetContext = React.createContext({
  catWaitlist: [],
  dogWaitlist: [],
  cat: {},
  nextCat: {},
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
    catWaitlist: ["Wendy", "Sophia", "Maggie", "Krystle", "Christina"],
    dogWaitlist: ["Andrea", "Joe", "Rich", "Tauhida"],
    cat: {},
    nextCat: {},
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

  setAllCats = resData => {
    this.setState({
      nextCat: resData
    });
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
      catWaitlist: this.state.catWaitlist,
      dogWaitlist: this.state.dogWaitlist,
      cat: this.state.cat,
      nextCat: this.state.nextCat,
      dog: this.state.dog,
      currentPerson: this.state.currentPerson,
      addPerson: this.addPerson,
      setCat: this.setCat,
      setAllCats: this.setAllCats,
      setDog: this.setDog,
      setCatWaitlist: this.setCatWaitlist,
      setDogWaitlist: this.setDogWaitlist,
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

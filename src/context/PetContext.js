import React, { Component } from "react";

const PetContext = React.createContext({
  catWaitlist: [],
  dogWaitlist: [],
  cat: {},
  dog: {},
  nextCat: {},
  nextDog: {},
  catAdopter: "",
  dogAdopter: "",
  setCatPerson: () => { },
  setDogPerson: () => { },
  resetCatPerson: () => { },
  resetDogPerson: () => { },
  setCat: () => { },
  setDog: () => { },
  setError: () => { },
  setCatWaitlist: () => { },
  setDogWaitlist: () => { },
  clearError: () => { }
});

export default PetContext;

export class PetProvider extends Component {
  state = {
    catWaitlist: ["Wendy", "Sophia", "Maggie", "Krystle", "Christina"],
    dogWaitlist: ["Andrea", "Joe", "Rich", "Tauhida", "Emma"],
    cat: {},
    dog: {},
    nextCat: {},
    nextDog: {},
    catAdopter: "",
    dogAdopter: "",
    yourTurn: false,
    current: {
      person: "",
      touched: false
    }
  };

  setCatPerson = catAdopter => {
    this.setState({ catAdopter });
  };

  resetCatPerson = () => {
    this.setState({ catAdopter: "" })
  }

  setCatWaitlist = person => {
    this.setState({ catWaitlist: [...this.state.catWaitlist, person] });
  };

  resetDogPerson = () => {
    this.setState({ dogAdopter: "" })
  }

  setDogPerson = dogAdopter => {
    this.setState({ dogAdopter });
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

  setAllCats = resData => {
    this.setState({
      error: null,
      nextCat: { ...resData }
    });
  };

  setAllDogs = resData => {
    this.setState({
      error: null,
      nextDog: { ...resData }
    });
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
      dog: this.state.dog,
      nextCat: this.state.nextCat,
      nextDog: this.state.nextDog,
      catAdopter: this.state.catAdopter,
      dogAdopter: this.state.dogAdopter,
      currentPerson: this.state.currentPerson,
      resetCatPerson: this.resetCatPerson,
      resetDogPerson: this.resetDogPerson,
      setCat: this.setCat,
      setDog: this.setDog,
      setAllCats: this.setAllCats,
      setAllDogs: this.setAllDogs,
      setCatPerson: this.setCatPerson,
      setDogPerson: this.setDogPerson,
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

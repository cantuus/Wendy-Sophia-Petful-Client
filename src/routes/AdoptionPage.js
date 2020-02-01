import React, { Component } from "react";
import "./AdoptionPage.css";
import { adoptionQueue, namesList } from '../Queue'
import PetApiService from "../services/pet-api-services";
import PeopleList from "../components/peopleList"
import CatAdoption from "../components/cat"
import DogAdoption from "../components/dog"

class AdoptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      cat: {},
      dog: {},

    };
  }

  static defaultProps = {
    history: {
      goBack: () => { }
    }
  };

  componentDidMount() {
    PetApiService.getCats()
      .then(response => {
        this.setState({
          cat: response
        })
        console.log('this is the', response);
      })
      .catch(error => {
        console.error({ error })
      })
    PetApiService.getDogs()
      .then(response => {
        this.setState({
          dog: response
        })
        console.log('this is the', response);
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <div className="AdoptionPage__animals">
        {/* <PeopleList
          people={this.state.people}
        /> */}
        <h2>Next available cat</h2>
        <CatAdoption
          cat={this.state.cat}
        />
        <h2>Next available dog</h2>
        <DogAdoption
          dog={this.state.dog}
        />
      </div>
    );
  }
}

export default AdoptionPage;

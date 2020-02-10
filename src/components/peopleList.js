import React, { Component } from "react";
import "./PeopleList.css";

class PeopleList extends Component {
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

  render() {
    const { person } = this.props;

    return (
      <>
        <li className="list">{person}</li>
      </>
    );
  }
}

export default PeopleList;

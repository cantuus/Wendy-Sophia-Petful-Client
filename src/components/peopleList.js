import React, { Component } from "react";
import "./peopleList.css";

class PeopleList extends Component {
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

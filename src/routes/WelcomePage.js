import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dog from "../images/dog.jpg";
import Cat from "../images/cat.jpg";

class WelcomePage extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to Petful!</h1>
          <h2>Where every pet finds a forever home</h2>
        </header>
        <img src={Dog} alt="dog" />
        <img src={Cat} alt="cat" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>Start the adoption process now to secure your place in the QUEUE!</p>
        <Link to="/adoptions">
          <button>Start the adoption process!</button>
        </Link>
      </div>
    );
  }
}
export default WelcomePage;

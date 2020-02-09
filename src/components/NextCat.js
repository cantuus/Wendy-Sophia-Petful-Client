import React, { Component } from "react";

class NextCat extends Component {
  render() {
    const { nextCatImg } = this.props;
    return <img src={nextCatImg} alt="available cats" />;
  }
}

export default NextCat;

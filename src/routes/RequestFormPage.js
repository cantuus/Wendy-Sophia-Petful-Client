import React, { Component } from "react";

import Form from "../components/Form";

class RequestFormPage extends Component {
  render() {
    return (
      <>
        <p>
          Every pet at Petful gets adopted. Please join the waiting list and be
          notified when you're next to adopt-a-pet!
        </p>
        <Form />
      </>
    );
  }
}

export default RequestFormPage;

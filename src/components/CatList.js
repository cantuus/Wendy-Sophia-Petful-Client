import React, { Component } from "react";
import PetApiService from "../services/pet-api-services";
import PetContext from "../context/PetContext";
import NextCat from "../components/NextCat";

class CatList extends Component {
  static contextType = PetContext;

  showCats = res => {
    PetApiService.displayCats(res)
      .then(dispRes => {
        this.context.setAllCats(dispRes);
      })
      .then(cat => {
        PetApiService.deleteCat().then(() => {
          if (cat) {
            setTimeout(() => {
              this.updateCat();
            }, 2000);
          }
        });
      })
      .catch(this.context.setError);
  };

  componentDidMount() {
    PetApiService.getCats().then(res => this.showCats(res));
  }

  renderNextCat() {
    const { nextCat } = this.context;
    return !nextCat.value ? (
      "We're sorry, there are no available cats at this time."
    ) : (
      <>
        <NextCat nextCatImg={nextCat.value.imageUrl} />
      </>
    );
  }

  renderNextNextCat() {
    const { nextCat } = this.context;
    return !nextCat.next ? (
      "We're sorry, there are no available cats at this time."
    ) : (
      <>
        <NextCat nextCatImg={nextCat.next.value.imageUrl} />
      </>
    );
  }

  render() {
    return (
      <div>
        {this.renderNextCat()}
        {this.renderNextNextCat()};
      </div>
    );
  }
}

export default CatList;

import React, { Component } from "react";
import PetApiService from "../services/pet-api-services";
import PetContext from "../context/PetContext";
import NextDog from "../components/NextDog";

class DogList extends Component {
    static contextType = PetContext;

    showDogs = res => {
        PetApiService.displayDogs(res)
            .then(dispRes => {
                this.context.setAllDogs(dispRes);
            })
            .then(dog => {
                PetApiService.deleteDog().then(() => {
                    if (dog) {
                        setTimeout(() => {
                            this.updateDog();
                        }, 2000);
                    }
                });
            })
            .catch(this.context.setError);
    };

    componentDidMount() {
        PetApiService.getDogs().then(res => this.showDogs(res));
    }

    renderNextDog() {
        const { nextDog } = this.context;
        return !nextDog.value ? (
            "We're sorry, there are no available dogs at this time."
        ) : (
                <>
                    <NextDog nextDogImg={nextDog.value.imageUrl} />
                </>
            );
    }

    renderNextNextDog() {
        const { nextDog } = this.context;
        return !nextDog.next ? (
            "We're sorry, there are no available dogs at this time."
        ) : (
                <>
                    <NextDog nextDogImg={nextDog.next.value.imageUrl} />
                </>
            );
    }

    render() {
        return (
            <div>
                {this.renderNextDog()}
                {this.renderNextNextDog()};
      </div>
        );
    }
}

export default DogList;
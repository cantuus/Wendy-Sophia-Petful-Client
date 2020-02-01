import React from 'react';
import Queue from '../Queue';

class DogAdoption extends React.Component {

    render() {
        return (
            <section className="dog-item">
                <img className="dog-picture" src={this.props.dog.imageUrl} alt={`picture of ${this.props.dog.name}`} />
                <ul>
                    <li>Name: {this.props.dog.name}</li>
                    <li>Description: {this.props.dog.imageDescription}</li>
                    <li>Sex: {this.props.dog.sex}</li>
                    <li>Age: {this.props.dog.age}</li>
                    <li>Breed: {this.props.dog.breed}</li>
                    <li>Story: {this.props.dog.story}</li>
                    <li>Date Admitted: {this.props.dog.date_admitted}</li>
                </ul>
            </section>
        )
    }
}

export default DogAdoption;
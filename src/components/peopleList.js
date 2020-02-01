import React from 'react';
import Queue from '../Queue';

class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: this.props.people
        };
    }

    render() {
        //assigns FIRST person with the their name in the list
        let currentPerson = this.state.people.first;
        let list = [<li key={currentPerson.value} className="person">{currentPerson.value}</li>];

        //reassigns the next person to be the current person
        currentPerson = currentPerson.next;

        while (currentPerson !== null) {
            list = [<li key={currentPerson.value} className="person">{currentPerson.value}</li>];
            currentPerson = currentPerson.next;
        }

        return (
            <div className="people-list" >
                i am the people
                <ul className="list">
                    {list}
                </ul>
            </div>
        );
    }
}

export default PeopleList;
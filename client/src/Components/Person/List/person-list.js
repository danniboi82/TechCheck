import React, { Component } from 'react';
import personApi from '../../../Data/person-api';
import './person-list.scss';
export default class PersonList extends Component {
  state = {
    people: []
  };
  deletePerson = id => {
    personApi.delete(id).then(result => {
      const newPeople = this.state.people.filter(person => {
        return person.id !== id;
      });
      this.setState({
        people: newPeople
      });
    });
  }
  componentDidMount() {
    personApi.getAll().then(results => {
      this.setState({ people: results });
    });
  }
  render() {
    return (
      <div className="person-list">
        <h2>THIS IS A PERSON LIST</h2>
        {this.state.people.map(person => {
          return <div key={person.id}> {person.firstName} <button onClick={() => this.deletePerson(person.id)}>Delete</button></div>
        })}
      </div>
    )
  }
}

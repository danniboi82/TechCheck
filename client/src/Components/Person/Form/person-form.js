import React, { Component } from 'react';
import personApi from '../../../Data/person-api';
import './person-form.scss';
export default class PersonForm extends Component {
  state = {
    people: []
  };
  componentDidMount() {
    personApi.getAll().then(results => {
      this.setState({ people: results });
    });
  }
  render() {
    return (
      <div className="person-form">
        <h2>THIS IS A PERSON FORM id:{this.props.match.params.id}</h2>
      </div>
    )
  }
}

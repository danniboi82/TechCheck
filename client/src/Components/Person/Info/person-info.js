import React, { Component } from 'react';
import personApi from '../../../Data/person-api';
import './person-info.scss';
export default class PersonInfo extends Component {
  state = {
    person: null,
    loading: true
  };
  componentDidMount() {
    personApi.getById(this.props.match.params.id).then(result => {
      this.setState({person: result, loading: false});
    });
  }
  render() {
    return (
      <div className="person-info">
      {this.state.loading ? (
        <div>Loading...</div>
      ) : (
        <h2>THIS IS A PERSON INFO name: {this.state.person &&
          this.state.person.firstName
        }</h2>
      )
      }
      </div>
    )
  }
}

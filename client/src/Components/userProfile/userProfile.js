import React, { Component } from 'react';
import users from '../Data/users-api'
//import { Route } from 'react-router-dom';
import {  Link } from 'react-router-dom';
class verify extends Component {
  
  state = {
    name: "",
    profilePic: "",
    userId: "",
    active: true,
    email: "",
    memberSince: "",
    verified: ""
  }
  
  componentDidMount = () => {
    console.log('this is my test')
    console.log(this.props.match.params.id)
    users.userProfile(this.props.match.params.id).then(dataPoints => {
      console.log(dataPoints)
      this.setState({
        name: dataPoints.data.firstName + ' ' + dataPoints.data.lastName,
        profilePic: dataPoints.data.profilePic,
        userId: dataPoints.data.id,
        email: dataPoints.data.email,
        active: dataPoints.data.active
      })
    });
    const s3buck ='https://s3-us-west-1.amazonaws.com/techcheckbucket/' +`${this.state.profilePic}`
  }
  
  //{this.state.name}
  render() {
    return (
      <div className="profile">
        <h1> {this.state.name}'s Profile Page</h1>

        <img id="profilePic" src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${this.state.profilePic}`} alt=""/>

        User Id:<Link to='/profile'>{this.state.userId}</Link>

      </div>
    )
  }

}
export default verify;
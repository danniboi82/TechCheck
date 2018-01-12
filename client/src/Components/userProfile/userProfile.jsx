import React, {Component } from 'react';
import users from '../Data/users-api'
import { Route } from 'react-router-dom';
import css from './userProfile.scss'
import { BrowserRouter, Link, NavLink, Switch } from 'react-router-dom';
class verify extends Component{
state = {
   name:"",
   profilePic:"",
   userId:""
  };

  style={
    width: 200,
    height: 200
  }
  componentDidMount = () => {
    users.userProfile().then(dataPoints => {
        console.log(dataPoints)
     this.setState({
      name:dataPoints.data
     })
    });
  };
  //{this.state.name}
  render() {
    return (
      <div className="profile">
    <h1> leslie chow's Profile Page</h1>

    <img id="css" src="http://s.quickmeme.com/img/68/68758948ea86ca6e07974aff63165fb5036bb1396aabadaf02e819273b4ce360.jpg" alt=""/>

User Id:<Link to='/profile'>a3e7f6c0-51b4-45c0-b618-23b18b082743</Link>
 
      </div>
    )
  }

}
export default verify;
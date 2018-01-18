import React, { Component } from 'react';
import users from '../../Data/users-api'
//import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import './userProfile.css';
import Avatar from 'material-ui/Avatar';

class verify extends Component {

  state = {
    name: "",
    profilePic: "",
    userId: "",
    active: true,
    email: "",
    memberSince: "",
    verified: "",
    address:"",
    createdOn:"",
    phoneNumber:""
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
        active: dataPoints.data.active,
        address: dataPoints.data.address,
        memberSince:dataPoints.data.createdAt,
        phoneNumber:dataPoints.data.phoneNumber
      })
    });
    const s3buck = `https://s3-us-west-1.amazonaws.com/techcheckbucket/${this.state.profilePic}`
  }

  render() {
    return (
      <div className="Profile">
        <Paper >
          <Avatar size={150} src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${this.state.profilePic}`} />


          <div className='UserInfo'>
            <div className='UserInfoDiv'>Name : {this.state.name}</div>
            <div className='UserInfoDiv'>Email : {this.state.email}</div>
            <div className='UserInfoDiv'>Address : {this.state.address}</div>
            <div className='UserInfoDiv'>phoneNumber : {this.state.phoneNumber}</div>
            <div className='UserInfoDiv'>User Id : {this.state.userId}</div>
            <div className='UserInfoDiv'>memberSince : {this.state.memberSince}</div>
            
          </div>
        </Paper>

      </div>
    )
  }

}
export default verify;
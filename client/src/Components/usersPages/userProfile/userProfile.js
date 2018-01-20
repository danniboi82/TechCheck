import React, { Component } from 'react';
import users from '../../Data/users-api'
//import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import './userProfile.css';
import Avatar from 'material-ui/Avatar';
import notFound from './404.jpg'
import axios from "axios";
class UserProfile extends Component {

  state = {
    name: "",
    profilePic: "",
    notPRofile: "",
    userId: "",
    active: true,
    email: "",
    memberSince: "",
    verified: "",
    address: "",
    createdOn: "",
    phoneNumber: "",
    edit: false,
    noUser: false,
    
  }
 
  changedToEdit = () => {
    this.setState({
      edit: true
    })
  }
  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
 
}

  onsubmit=()=>{
 this.setState({
   edit:false
 })
 
 axios({
   method:'put',
   url:"/api/users/update/info",
data: {userId:this.state.userId,firstName:this.state.firstName,lastName:this.state.lastName,
  email:this.state.email,address:this.state.address,phoneNumber:this.state.phoneNumber,profilePic:this.state.profilePic
}


 })
  }
  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      console.log('enter press here! ')
  
        this.onsubmit()
        console.log(this.state.edit)
    
     
      
    }
  }
  componentDidMount = () => {
    console.log('this is my test')
    console.log(this.props)

    users.userProfile(this.props.match.params.id).then(dataPoints => {
      console.log(dataPoints)
      if (dataPoints.data === 'noUser') {
        this.setState({
          noUser: true,
          name: '404',
          notPRofile: notFound,
          userId: '404',
          email: '404',
          active: '404',
          address: '404',
          memberSince: '404',
          phoneNumber: '404'

        })
      } else {


        this.setState({
          name: dataPoints.data.firstName + ' ' + dataPoints.data.lastName,
          profilePic: dataPoints.data.profilePic,
          userId: dataPoints.data.id,
          email: dataPoints.data.email,
          active: dataPoints.data.active,
          address: dataPoints.data.address,
          memberSince: dataPoints.data.createdAt,
          phoneNumber: dataPoints.data.phoneNumber
        })
      }
    });

  }

  render() {
    return (
      // <Link to={`/edit/user/${this.state.userId}`}> 
      <div className="Profile">
    
        <Paper >
          {this.state.noUser &&
            <h1>404 No User Found</h1>
          }
          {!this.state.edit?
          <Avatar size={150} onChange={this.onChange} src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${this.state.profilePic || this.state.notPRofile}`} />:<div><input type='file' ></input> <br/></div>}
         

          <div className='UserInfo'>

{!this.state.edit ? 
            <div className='UserInfoDiv'>Name : {this.state.name}</div>: <div><br/><input name='name' onChange={this.onChange} value={this.state.name}></input> <br/></div>}
          
           {!this.state.edit ? 
            <div className='UserInfoDiv'>Email : {this.state.email}</div>: <div><br/><input  name='email' onChange={this.onChange} value={this.state.email}></input> <br/></div>}
  
            {!this.state.edit ?
            <div className='UserInfoDiv'>Address : {this.state.address}</div>:<div><br/><input name='address' onChange={this.onChange} value={this.state.address}></input> <br/></div>}
    
         {!this.state.edit?
            <div className='UserInfoDiv'>phoneNumber : {this.state.phoneNumber}</div>:<div><br/><input name='phoneNumber' onChange={this.onChange} value={this.state.phoneNumber}></input> <br/></div>}
         
          {!this.state.edit &&
            <div className='UserInfoDiv'>User Id : {this.state.userId}</div>}
             
            {!this.state.edit &&
            <div className='UserInfoDiv'>Member Since : {this.state.memberSince}</div>}
   {!this.state.edit ?
        
<button onClick={this.changedToEdit}>Edit Profile</button>:<button onKeyPress={this.handleKeyPress} onClick={this.onsubmit}>change Profile</button>}

          </div>
        </Paper>

      </div>
    )
  }

}
export default UserProfile;
import React, { Component } from 'react';
import users from '../../Data/users-api'
//import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import './userProfile.css';
import Avatar from 'material-ui/Avatar';
import notFound from './404.jpg'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
          profilePic:undefined,
          noUser: true,
          name: '404',
          notPRofile: true,
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
         
          {/* {!this.state.edit ? */}
          {!this.state.notPRofile ?
          <Avatar size={150} onChange={this.onChange} src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${this.state.profilePic }`} />: <Avatar size={150} onChange={this.onChange} src={notFound} />}
          {/* // {<div><input type='file' ></input> <br/></div>} */}

          <div className='UserInfo'>

{!this.state.edit ? 
            <div className='UserInfoDiv'><TextField  floatingLabelText="Name" disabled={true} value={this.state.name}/></div>: <div><TextField floatingLabelText="Name" name='name' onChange={this.onChange} defaultValue={this.state.name}/> <br/></div>}
          
           {!this.state.edit ? 
            <div className='UserInfoDiv'><TextField  floatingLabelText="Email" disabled={true} value={this.state.email}/></div>: <div><TextField floatingLabelText="Email" name='email' onChange={this.onChange} defaultValue={this.state.email}/> <br/></div>}
  
            {!this.state.edit ?
            <div className='UserInfoDiv'><TextField  floatingLabelText="Address" disabled={true} value={this.state.address}/></div>:<div><TextField floatingLabelText="Address" name='address' onChange={this.onChange} defaultValue={this.state.address}/> <br/></div>}
    
         {!this.state.edit?
            <div className='UserInfoDiv'><TextField  floatingLabelText="Phone Number" disabled={true} value={this.state.phoneNumber}/></div>:<div><TextField floatingLabelText="Phone Number" name='phoneNumber' onChange={this.onChange} defaultValue={this.state.phoneNumber}/> <br/></div>}
         
          {!this.state.edit &&
            <div className='UserInfoDiv'><TextField  floatingLabelText="User ID" disabled={true} value={this.state.userId}/></div>}
             
            {!this.state.edit &&
            <div className='UserInfoDiv'><TextField  floatingLabelText="Member Since" disabled={true} value={this.state.memberSince}/></div>}
   {!this.state.edit ?
        
<RaisedButton label="Edit Information" onClick={this.changedToEdit}Edit Profile />:<RaisedButton label="Submit Changes" onClick={this.onsubmit}change Profile/>}

          </div>
        </Paper>

      </div>
    )
  }

}
export default UserProfile;
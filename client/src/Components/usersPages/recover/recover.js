import React, {Component } from 'react';
import users from '../../Data/users-api'
import { Route,Redirect  } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from "axios";  
class recover extends Component{
state = {
  email:''
  };

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
}

  onSubmit =()=>{
      users.reset(this.state.email).then(function(done){
          console.log(this.state.email)
      })
      window.location = '/sent'
  }
  render() {
    return (   
        <MuiThemeProvider> 
        <div>
        To Recover your account please first enter your email address.<br/>
        Next you will recive an email,click the link to reset your Password.
        <br/>
        <TextField
        name="email"
        value={this.state.email}
        floatingLabelText="Email Address"
        onChange={this.onChange} />
    <br />
     <RaisedButton type='submit' onClick={this.onSubmit}>
    Reset Password
                        </RaisedButton>
        </div>
        </MuiThemeProvider>
    )
  }

}
export default recover;
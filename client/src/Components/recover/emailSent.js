import React, {Component } from 'react';
import users from '../Data/users-api'
import { Route,Redirect  } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from "axios";  
class recover extends Component{

goHome =()=>{window.location='/'}

  render() {
    return (   
        <MuiThemeProvider> 
        <div>
        We have sent you an email to reset your password. <br/>
      Please click the link and reset your password. <br/> Don't forget to check your spam folder.
        <br/>
       
    <br />
     <RaisedButton  onClick={this.goHome}>
    Main Page
                        </RaisedButton>
        </div>
        </MuiThemeProvider>
    )
  }

}
export default recover;
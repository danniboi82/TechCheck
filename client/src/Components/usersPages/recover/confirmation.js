import React, {Component } from 'react';
import users from '../../Data/users-api'
import { Route,Redirect  } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from "axios";  
import './recover.scss'
class confirmation extends Component{
    goHome =()=>{window.location='/'}
  render() {
    return (   
        <MuiThemeProvider> 
        <div>
       
        You have changed your password sucsessfully. 
        You will recieve a confirmation email

    <br />
     <RaisedButton  onClick={this.goHome}>
  Go to main page
                        </RaisedButton>
        </div>
        </MuiThemeProvider>
    )
  }

}
export default confirmation;
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
    state={
        pass:"",
        passswordConfirm:"",
        id:"" 
    }
    componentDidMount = () => {
        this.setState({
            id:this.props.match.params.id
           })
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
     
    }
   
    onSubmit =()=>{
        
      
        

     axios({
        
       method: 'put',
       url: '/api/users/change',
       data: {
           id:this.state.id,
           newpass:this.state.pass,
           passswordConfirm:this.state.passswordConfirm
       },baseURL: 'localhost:3000/',crossDomain: true
     }).catch(function (error) {
        console.log(error);
      });
    
        
    }

  render() {
    return (   
        <MuiThemeProvider> 
        <div>
        <TextField
    type='password'
        name="pass"
        value={this.state.pass}
        floatingLabelText="password"
        onChange={this.onChange} /><br/>
        <TextField
        type='password'
        name="passswordConfirm"
        value={this.state.passswordConfirm}
        floatingLabelText="passsword confirm"
        onChange={this.onChange} />
    <br />
     <RaisedButton  onClick={this.onSubmit}>
    Main Page
                        </RaisedButton>
        </div>
        </MuiThemeProvider>
    )
  }

}
export default recover;
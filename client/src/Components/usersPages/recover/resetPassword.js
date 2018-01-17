import React, {Component } from 'react';
import users from '../../Data/users-api'
import { Route,Redirect, Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from "axios";  
import './recover.scss'
class recover extends Component{
    state={
        pass:"",
        passswordConfirm:"",
        id:"" ,
        noMatch:false
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
        
      if(this.state.pass == this.state.passswordConfirm){
        axios({
        
            method: 'put',
            url: '/api/users/change',
            data: {
                id:this.state.id,
                newpass:this.state.pass,
                passswordConfirm:this.state.passswordConfirm
            },
          }).then(function (h){
             window.location='/confirmation/reset'
          }).catch(function (error) {
             console.log(error);
           });
      }else{
        const currentState = this.state.noMatch;
        this.setState({ noMatch: !currentState });
      }
 
    }

  render() {
    return (   
        <MuiThemeProvider> 
        <div>{this.state.noMatch &&
            <h1 className={this.state.noMatch ? 'noMatch': null} >Your passwords do not match</h1>
            }
        <TextField
    type='password'
        name="pass"
        value={this.state.pass}
        floatingLabelText="password"
        onChange={this.onChange} 
         
        className={this.state.noMatch ? 'noMatch': null} 
        /><br/>
        <TextField
        type='password'
        name="passswordConfirm"
        value={this.state.passswordConfirm}
        floatingLabelText="passsword confirm"
        onChange={this.onChange} 
         
        className={this.state.noMatch ? 'noMatch': null} 
        />
    <br />
    <RaisedButton  onClick={this.onSubmit}>
   Reset Password
                        </RaisedButton>
        </div>
        </MuiThemeProvider>
    )
  }

}
export default recover;
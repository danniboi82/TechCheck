// import React from 'react';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from "axios";
import validator from 'validator';
// import FormErrors from '../../'
import { FormErrors } from '../../';

const required = (value) => {
    if (!value.toString().trim().length) {
      // We can return string or jsx as the 'error' prop for the validated Component
      return 'require';
    }
  };
   
  const email = (value) => {
    if (!validator.isEmail(value)) {
      return `${value} is not a valid email.`
    }
  };
   
  const lt = (value, props) => {
    // get the maxLength from component's props
    if (!value.toString().trim().length > props.maxLength) {
      // Return jsx
      return <span className="error">The value exceeded {props.maxLength} symbols.</span>
    }
  };
   
  const password = (value, props, components) => {
    // NOTE: Tricky place. The 'value' argument is always current component's value.
    // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
    // But if we're changing 'confirm' component - the condition will always be true
    // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
    if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
      // 'confirm' - name of input
      // components['confirm'] - array of same-name components because of checkboxes and radios
      return <span className="error">Passwords are not equal.</span>
    }
  };

const styles = {
    button: {
        margin: 12,
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
};

const userRegistrationStyles = {
    h1: {
        color: 'white',
    },

    buttonDiv: {
        backgroundColor: 'white',
        fontSize: '20px'
    },

    wrapper: {
        backgroundColor: 'black',
        textAlign: 'center',
    },
}
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;



class addUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: "",
            dateOfBirth: "",
            profilePic: "",
            password: "",
            passwordConfirm: "",
            formErrors: {firstname: "", lastName: "", email: '', address: "", dateOfBirth: "",  password: ''},
            emailValid: false,
            firstNameValid: false,
            lastNameValid: false,
            phoneNumberValid: false,
            addressValid: false,
            dateOfBirthValid: false,
            passwordValid: false,
            formValid: false

        }
        // const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        // let firstNameValid = this.state.firstNameValid;
        // let lastNameValid = this.state.lastNameValid;
        // let addressValid = this.state.addressValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
                      () => { this.validateField(name, value) });
      }


        // let value = e.target.value;
        // const name = e.target.name;
        // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        
        // if (name === "password") {
        // value = value.substring(0, 15);
        
    
   
    
    imageChange =(e) => { 
        this.setState({ 
            [e.target.name]: e.target.value.split('\\').pop() 
        }); 
        const file = e.target.files[0] 
        
         
 
        const dataPic = new FormData(); 
        dataPic.append('upl', file , file.name); 
        console.log(dataPic) 
        const config = { 
            headers: { 'content-type': 'multipart/form-data'} 
        } 
        axios.post("/api/users/upload", dataPic, config)
    

     
   

  

}
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.firstName || !this.state.lastName) {
            alert("Fill out your first and last name please!");
          } else if (this.state.password.length < 6) {
            alert(
              `Choose a password that is at least 6 characters`
            );
          } else {
            alert(`Welcome ${this.state.firstName} ${this.state.lastName}`);
          }

        const { firstName, lastName, email, phoneNumber, address, dateOfBirth, profilePic, password } = this.state;

        axios.post('/api/users', { firstName, lastName, email, phoneNumber, address, dateOfBirth, profilePic, password })
            .then((result) => {
if(result =='already'){
    alert('There is already an account with that email addres,please try a diffrent one')
}else{

}
            })
    }
    render() {
        return (
            <MuiThemeProvider>
                <div >
                <h1 formErrors={this.state.formErrors} />
                </div>
                <div style={{ padding: '30px 0' }}>

                    <div>
                        <TextField
                            name="email"
                            value={this.state.email}
                            floatingLabelText="Email Address"
                            onChange={this.onChange}
                            validations={[required, email]} />
                        <br />
                        <TextField
                            name="firstName"
                            value={this.state.firstName}
                            floatingLabelText="First Name"
                            onChange={this.onChange} />
                        <br />
                        <TextField
                            name="lastName"
                            value={this.state.lastName}
                            floatingLabelText="Last Name"
                            onChange={this.onChange} />
                        <br />
                        <TextField
                            name="address"
                            value={this.state.address}
                            floatingLabelText="Address"
                            onChange={this.onChange} />
                        <br />
                        <TextField
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            floatingLabelText="Phone Number"
                            onChange={this.onChange} />
                        <br />
                        <TextField
                            name="dateOfBirth"
                            value={this.state.dateOfBirth}
                            floatingLabelText="Date of Birth"
                            onChange={this.onChange} />
                        <br />
                        <TextField
                            name="password"
                            type="password"
                            value={this.state.password}
                            floatingLabelText="Password"
                            onChange={this.onChange}/>
                        <br />
                        <TextField
                            name="passwordConfirm"
                            type="password"
                            value={this.state.passwordConfirm}
                            floatingLabelText="Confirm Password"
                            validations={[required]}
                            onChange={this.onChange} />
                        <br />
                        <RaisedButton
                            label="Upload Avatar"
                            labelPosition="before"
                            style={styles.button}
                            containerElement="label"
                            
                        >
                            <input name='profilePic'type="file" onChange={this.imageChange} style={styles.exampleImageInput} />
                        </RaisedButton>
                    </div>
                    <div>
                        <br />
                        <RaisedButton onClick={this.onSubmit} label="Submit!" disabled={!this.state.formValid} />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default addUser;

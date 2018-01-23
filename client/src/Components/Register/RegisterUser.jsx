// import React from 'react';
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from "axios";
import validator from 'validator';

import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';


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



const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
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
    passwordj: {
        opacity: 0.5,
    },
    h1: {
        fontWeight: 300
    }
};



class addUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: "",
            dateOfBirth: null,
            profilePic: "",
            password: "",
            passwordConfirm: "",
            formErrors: { firstname: "", lastName: "", email: '', address: "", dateOfBirth: "", password: '' },
            emailValid: false,
            firstNameValid: false,
            lastNameValid: false,
            phoneNumberValid: false,
            addressValid: false,
            dateOfBirthValid: false,
            passwordValid: false,
            formValid: false,
            noMatch: true,
            passRequire:true,
            rows:2


        }
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        // let firstNameValid = this.state.firstNameValid;
        // let lastNameValid = this.state.lastNameValid;
        // let addressValid = this.state.addressValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/);
                fieldValidationErrors.password = passwordValid ? '' : 'Password is not secure enough';
                break;
                case 'passwordConfirm':
                passwordValid = value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/);
                fieldValidationErrors.password = passwordValid ? '' : 'Password is not secure enough';
                break;
                // case 'phoneNumber':
                // phoneNumberValid=value.match('^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$')
                // break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }
    tellPassReg=()=>{
this.setState({
    passRequire:false
})
    }   
    hidePassReq=()=>{
        this.setState({
            passRequire:true
        })
    }
    passMatch =()=>{
  if (this.state.password != this.state.passwordConfirm) {
            this.setState({
                noMatch: false
            })
        }
        else {
            this.setState({
                noMatch: true
            })
       }

    }
   
  
       
    onChange = (e) => {
       

        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

 // let value = e.target.value;
    // const name = e.target.name;
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    // if (name === "password") {
    // value = value.substring(0, 15);


    handleDOB = (event, date) => {
        let currentState = this.state;
        currentState.dateOfBirth = date;
        this.setState(currentState);
    }

    imageChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value.split('\\').pop()
        });
        const file = e.target.files[0]



        const dataPic = new FormData();
        dataPic.append('upl', file, file.name);
        console.log(dataPic)
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
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
                if (result == 'already') {
                    alert('There is already an account with that email addres,please try a diffrent one')
                } else {

                }
            })
            window.location='/'
    }
    render() {
        return (
            <MuiThemeProvider>
                
                <div styles={{margin:"auto"}}>
                <Paper style={style} zDepth={1} />
                {<h1 style={styles.h1}>Create an Account!</h1>}
                {<p>TechCheck makes it convenient and hassle-free users to exchange PC parts and electronics.</p>}
                </div>
                <div style={{ padding: '20px 0' }}>

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
                        <DatePicker name="dateOfBirth"
                            hintText="Open to Year"
                            openToYearSelection={true}

                            value={this.state.dateOfBirth}
                            floatingLabelText="Date of Birth"
                            onChange={this.handleDOB} />
                        <br />
{!this.state.passRequire &&
<p>Passwords must contain at least 6 characters.One letter,one number, and a speical character.</p>}

                        <TextField

                            name="password"
                           
                            value={this.state.password}
                            //placeholder="password"
                            
                            floatingLabelText="Password"
                            style={{ textAlign: 'left' }}
                            onBlur={this.hidePassReq}
                            
                            type="password"
                            onClick={this.tellPassReg}
                            // floatingLabelFixed={true}
                            onChange={this.onChange}
                        />
                        <br />
                        <TextField
                            name="passwordConfirm"
                            type="password"
                            value={this.state.passwordConfirm}
                            floatingLabelText="Confirm Password"
                            validations={[required]}
                            onChange={this.onChange} 
                            onMouseOut={this.passMatch}/>
                       {!this.state.noMatch &&
<p>Your passwords do not match.</p>}

                        <br />
                        <RaisedButton
                            label="Upload Avatar"
                            labelPosition="before"
                            style={styles.button}
                            containerElement="label"

                        >
                            <input name='profilePic' type="file" onChange={this.imageChange} style={styles.exampleImageInput} />
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

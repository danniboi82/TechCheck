import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from "axios";
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

        }
       
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, phoneNumber, address, dateOfBirth, profilePic, password } = this.state;

        axios.post('/api/users', { firstName, lastName, email, phoneNumber, address, dateOfBirth, profilePic, password })
            .then((result) => {

            });
    }
    render() {
        return (
            <MuiThemeProvider>
                <div style={{ padding: '30px 0' }}>

                    <div>
                        <TextField
                            name="email"
                            value={this.state.email}
                            floatingLabelText="Email Address"
                            onChange={this.onChange} />
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
                            onChange={this.onChange} />
                        <br />
                        <TextField
                            name="passwordConfirm"
                            type="password"
                            value={this.state.passwordConfirm}
                            floatingLabelText="Confirm Password"
                            onChange={this.onChange} />
                        <br />
                        <RaisedButton
                            label="Upload Avatar"
                            labelPosition="before"
                            style={styles.button}
                            containerElement="label"
                        >
                            <input type="file" style={styles.exampleImageInput} />
                        </RaisedButton>
                    </div>
                    <div>
                        <br />
                        <RaisedButton onClick={this.onSubmit} label="Submit!" />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
// const addUser = () => {
//     return (
//         <div style={userRegistrationStyles.wrapper}>
//             <h1 style={userRegistrationStyles.h1}> Sign-up!! </h1>
//             <Subheader> First Name :</Subheader>
//             <TextField
//                 hintText="First Name"
//                 helper="First Name"
//             /><br />
//             <Subheader> Last Name :</Subheader>
//             <TextField
//                 hintText="Last Name"
//             /><br />
//             <Subheader> Address :</Subheader>
//             <TextField
//                 hintText="Address"
//                 multiLine={true}
//                 rows={2}
//             /><br />
//             <Subheader> E-mail :</Subheader>
//             <TextField
//                 hintText="E-mail"
//             /><br />
//             <div style={{ padding: '20px' }}>
//                 <FlatButton style={userRegistrationStyles.buttonDiv} label='Submit' primary={true} />
//             </div>
//         </div>
//     );
// }

export default addUser;
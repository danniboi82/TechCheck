import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
    state= {
        error: null, 
    person: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        dateOfBirth: "",
        profilePic: ""
    }}
    render() {
return (
    <MuiThemeProvider>
    <div>
        <div>{this.state.error}</div>
        <div>
            <TextField
                name="email"
                value={this.state.person.email}
                floatingLabelText="First Name"
                onChange={this.handleChange}/>
            <TextField
                name="firstname"
                value={this.state.person.firstName}
                floatingLabelText="First Name"
                onChange={this.handleChange}/>
            <TextField
                name="lastname"
                value={this.state.person.lastName}
                floatingLabelText="Last Name"
                onChange={this.handleChange}/>
            <TextField
                name="address"
                value={this.state.person.address}
                floatingLabelText="Address"
                onChange={this.handleChange}/>
            <TextField
                name="phonenumber"
                value={this.state.person.phoneNumber}
                floatingLabelText="Phone Number"
                onChange={this.handleChange}/>
            <TextField
                name="dob"
                value={this.state.person.dateOfBirth}
                floatingLabelText="Last Name"
                onChange={this.handleChange}/>
            <RaisedButton
                label="Upload Avatar"
                labelPosition="before"
                style={this.userRegistrationStyles}
                containerElement="label"
                >
                <input type="file" style={this.userRegistrationStyles} />
            </RaisedButton>
        </div>
        <div>
            <RaisedButton onClick={this.onClick} label="Submit!" />
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
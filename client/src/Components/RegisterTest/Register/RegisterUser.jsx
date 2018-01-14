import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';

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

state = {
    error: null, 
    person: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        dateOfBirth: "",
        profilePic: ""
    }
};
const addUser = () => {
return (
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
                style={styles.button}
                containerElement="label"
                >
                <input type="file" style={styles.exampleImageInput} />
            </RaisedButton>
        </div>
        <div>
            <RaisedButton onClick={this.onClick} label="Submit!" />
        </div>
    </div>
);
}

export class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        // make sure the "this" variable keeps its scope
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <div>
                <div>{this.state.error}</div>
                <div>
                    <TextField
                        name="firstname"
                        value={this.state.person.firstname}
                        floatingLabelText="First Name"
                        onChange={this.handleChange}/>
                    <TextField
                        name="lastname"
                        value={this.state.person.lastname}
                        floatingLabelText="Last Name"
                        onChange={this.handleChange}/>
                </div>
                <div>
                    <RaisedButton onClick={this.onClick} label="Submit!" />
                </div>
            </div>
        );
    }

    onClick() {
        console.log("when clicking, the form data is:");
        console.log(this.state.person);
    }

    handleChange(event, newValue): void {
        event.persist(); // allow native event access (see: https://facebook.github.io/react/docs/events.html)
        // give react a function to set the state asynchronously.
        // here it's using the "name" value set on the TextField
        // to set state.person.[firstname|lastname].            
        this.setState((state) => state.person[event.target.name] = newValue);

    }

}


React.render(<MyForm />, document.getElementById('app'));

export default addUser;
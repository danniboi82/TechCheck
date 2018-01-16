import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import users from '../../Data/users-api'
import axios from "axios";
import '../navbar.scss'
const loginButtonStyles = {
    maxWidth: '30%',
    position: 'fixed',
    top: '30%',
    right: '10%',
    margin: 'auto'
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSignInDialogue: false,
            open: false,
            email: '',
            pass: '',
            doesntMatch: false,

        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    

    onSubmit = () => {
        const self= this;
        axios({
            method: 'post',
            url: '/api/users/signIn',
            data: {
                email: this.state.email,
                pass: this.state.pass,
            },
        })
            .then(function (res) {
                if (res.data === 'noMatch') {
                    self.setState({ doesntMatch: true });
                } else {
                    console.log(res)
                    sessionStorage.setItem('auth', res.data)
                    self.handleClose()
                    window.location='/'
                }
            }).catch(function (error) {
                console.log(error);
            });
        //   const currentState = this.state.noMatch;
        //   this.setState({ noMatch: !currentState });
    }


    static muiName = 'FlatButton';

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                
                onClick={this.onSubmit}
            />,
            <Link to='/acount/recovery'> <FlatButton
                label="Forgot Password"
                primary={true}
                onClick={this.handleClose}
            /></Link>,
            <Link to='/registration'> <FlatButton
                label="Registration"
                primary={true}
                onClick={this.handleClose}
            /></Link>
        ];
        return (
            <div>


                <div className='LogInSection'>
                    <FlatButton {...this.props} label="Login" onClick={this.handleOpen} />
                </div>
                <div>
                    <Dialog
                        actionsContainerStyle={{ textAlign: 'left' }}
                        title="Login"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        {this.state.doesntMatch &&
                            <h1  className='noMatch' >Email And Password does not match. Please try again.</h1>
                        }

                        <TextField
                            floatingLabelText="Email"
                            name='email'
                            hintText="Email"
                            onChange={this.onChange}
                        /><br />
                        <TextField
                            name="pass"
                            hintText="Password"
                            floatingLabelText="Password"
                            type="Password"
                            onChange={this.onChange}
                        /><br />

                        <div className='RegistrationDiv'>

                        </div>

                    </Dialog>
                </div>

            </div>

        );
    }
}

export default Login;
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import users from '../../Data/users-api'
import axios from "axios";
import '../navbar.scss'
import './LoginButton.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSignInDialogue: false,
            open: false,
            email: '',
            pass: '',
            doesntMatch: false,
            noUser: false

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
        const self = this;
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
                    self.setState({ doesntMatch: true, noUser: false });

                } else if (res.data === 'noUser') {
                    self.setState({ noUser: true, doesntMatch: false });

                }
                else {
                    console.log(res)
                    sessionStorage.setItem('auth', res.data)
                    self.handleClose()
                    window.location = '/'
                }
            }).catch(function (error) {
                console.log(error);
            });
        //   const currentState = this.state.noMatch;
        //   this.setState({ noMatch: !currentState });
    }


    static muiName = 'FlatButton';

    render() {
        return (
            <div>
                <div className='LogInSection'>
                    <FlatButton {...this.props} label="Login" onClick={this.handleOpen} />
                </div>
                <div>
                    <Dialog
                        actionsContainerStyle={{ textAlign: 'left' }}
                        title="Login"

                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        {this.state.noUser &&
                            <p className='noMatch'>There is no account associated with that email</p>}
                        {this.state.doesntMatch &&
                            <p className='noMatch' >Email And Password does not match. Please try again.</p>
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

                        <div className='SignInDiv'>
                            <FlatButton
                                label="Cancel"
                                primary={true}
                                onClick={this.handleClose}
                            />
                            <FlatButton
                                label="Submit"
                                primary={true}
                                keyboardFocused={true}

                                onClick={this.onSubmit}
                            />
                            <Link to='/acount/recovery'>
                                <FlatButton
                                    label="Forgot Password"
                                    primary={true}
                                    onClick={this.handleClose}
                                />
                            </Link>
                            <span className='RegistrationDiv'>
                            <Link to='/registration'>
                                <FlatButton
                                    label="Registration"
                                    primary={true}
                                    onClick={this.handleClose}
                                />
                            </Link>
                            </span>
                        </div>
                    </Dialog>
                </div>

            </div>

        );
    }
}

export default Login;
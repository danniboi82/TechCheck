import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import users from '../../Data/users-api'
import axios from "axios";
import '../navbar.scss';
import './LoginButton.css';
import { Container, Row } from 'react-grid-system';

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
                <Container>
                    <Dialog
                        actionsContainerStyle={{ textAlign: 'center' }}
                        title="Login / Registration"
                        className='Dialogue'
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        {this.state.noUser &&
                            <p className='noMatch'>There is no account associated with that email</p>}
                        {this.state.doesntMatch &&
                            <p className='noMatch' >Email And Password does not match. Please try again.</p>
                        }
                        <Row>
                            <div>
                                <TextField
                                    floatingLabelText="Email"
                                    name='email'
                                    hintText="Email"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div>
                                <TextField
                                    name="pass"
                                    hintText="Password"
                                    floatingLabelText="Password"
                                    type="Password"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className='SignInDiv'>
                                <FlatButton
                                    style={{ backgroundColor: 'white', margin: '25px 15px' }}
                                    label="Submit"
                                    primary={true}
                                    keyboardFocused={true}
                                    onClick={this.onSubmit}
                                />
                                <FlatButton
                                    style={{ backgroundColor: '#DD4124', margin: '25px 15px' }}
                                    label="Cancel"
                                    primary={true}
                                    onClick={this.handleClose}
                                />
                            </div>

                            <span className='RegistrationDiv'>
                                <Link to='/registration'>
                                    <FlatButton
                                        style={{ backgroundColor: 'white', margin: '25px 15px' }}
                                        label="Registration"
                                        primary={true}
                                        onClick={this.handleClose}
                                    />
                                </Link>

                                <Link to='/acount/recovery'>
                                    <FlatButton
                                        style={{ backgroundColor: 'white', margin: '25px 15px' }}
                                        label="Forgot Password"
                                        primary={true}
                                        onClick={this.handleClose}
                                    />
                                </Link>
                            </span>

                        </Row>
                    </Dialog>
                </Container>

            </div>

        );
    }
}

export default Login;
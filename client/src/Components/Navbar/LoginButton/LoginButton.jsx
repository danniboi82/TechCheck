import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';


const loginButtonStyles = {
        maxWidth: '30%',
        position: 'fixed',
        top: '30%',
        right: '10%',
        margin: 'auto'
}
class Login extends Component {
    state = {
        showSignInDialogue: false,
        open: false,
        userName: '',
        password: '',
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

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
                onClick={this.handleClose}
            />,
        ];
        return (
            <div>
                <div className='LogInSection'>
                    <FlatButton {...this.props} label="Login" onClick={this.handleOpen} />
                </div>
                <div>
                    <Dialog
                        actionsContainerStyle={{textAlign: 'left'}}
                        title="Login"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <TextField
                            hintText="Email"
                            onChange=''
                        /><br />
                        <TextField
                            hintText="Password Field"
                            floatingLabelText="Password"
                            type="Password"
                            onChange=''
                        /><br />

                        <div className='RegistrationDiv'>
                            <Link to='/registration'> <FlatButton
                                label="Registration"
                                primary={true}
                                keyboardFocused={true}
                                onClick={this.handleClose}
                                style={loginButtonStyles}
                            /></Link>
                        </div>

                    </Dialog>
                </div>

            </div>

        );
    }
}

export default Login;
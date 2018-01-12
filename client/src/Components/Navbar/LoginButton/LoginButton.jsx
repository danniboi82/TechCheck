import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import LoggedInButton from '../LoggedInButton/LoggedInButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';


class Login extends Component {
    state = {
        showSignInDialogue: false,
        open: false,
        userName:'',
        password:'',
    }

    // buttonClickedhandler = () => {
    //     this.setState({
    //         showSignInDialogue: true,
    //     });
    // };

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
                <div>
                    <FlatButton {...this.props} label="Login" onClick={this.handleOpen} />
                </div>
                <div>
                    <Dialog
                        title="Sign-in"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <TextField
                            hintText="Username"
                            onChange=''
                        /><br />
                        <TextField
                            hintText="Password Field"
                            floatingLabelText="Password"
                            type="password"
                            onChange=''
                        /><br />
                    </Dialog>
                </div>
            </div>

        );
    }
}

export default Login;
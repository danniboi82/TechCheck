import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import SearchBar from 'material-ui-search-bar';
import logo from '../../ic_shopping_cart_black_24px.svg';
import Avatar from 'material-ui/Avatar';
import { BrowserRouter, Link, NavLink, Switch } from 'react-router-dom';



class Login extends Component {

  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem>
      <Avatar
        src="images/uxceo-128.jpg"
        size={30}
        style={{display: 'in-line', margin: 'auto'}}
      /> Username
    </MenuItem>
    <MenuItem primaryText="My Products" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';


const style = {
  textAlign: 'center',
  marginTop: '20px',
}

class Navbar extends Component {
  state = {
    logged: false,
  };

  handleChange = (event, logged) => {
    this.setState({ logged: logged });
  };


  render() {
    return (
      <div>
        <AppBar
          title="TechTronicX"
          onClick={this.handleChange}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        >
          <FlatButton title='cart' style={style} >
            <img src={logo} alt="shopping cart" />
          </FlatButton>

        </AppBar>
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            margin: '0 auto',
            maxWidth: '100%',
            backgroundColor: '#344b70',
            color: 'black'
          }}
        />
      </div>
    );
  }
}

export default Navbar;
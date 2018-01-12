import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import SearchBar from 'material-ui-search-bar';
import logo from '../../ic_shopping_cart_black_24px.svg';
import { Link } from 'react-router-dom';
import LoggedInButton from './LoggedInButton/LoggedInButton';
import LoginButton from './LoginButton/LoginButton';


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
          title="TechCheck"
          onClick={this.handleChange}
          iconElementRight={this.state.logged ? <LoggedInButton /> : <LoginButton />}
        >
          <FlatButton title='cart' style={style} >
            <img src={logo} alt="shopping cart" />
          </FlatButton>

        </AppBar>

        <div className='routeDiv'>
          <FlatButton> <Link to='/'>Home</Link> </FlatButton>
          <FlatButton> <Link to='/search_results'>Search Results</Link> </FlatButton>
          <FlatButton style={{paddingLeft: '10px'}}> <Link to='/product_detail'> Product Details</Link> </FlatButton>
          <FlatButton style={{paddingLeft: '10px'}}> <Link to='/sell_product'>Sell Product</Link> </FlatButton>
          <FlatButton style={{paddingLeft: '10px'}}> <Link to='/registration'> Registration </Link> </FlatButton>
       <FlatButton ><Link to='/api/users/profile/a3e7f6c0-51b4-45c0-b618-23b18b082743'>user Profile</Link></FlatButton>
        </div>

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
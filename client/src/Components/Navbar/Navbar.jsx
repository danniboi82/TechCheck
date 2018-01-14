import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import SearchBar from 'material-ui-search-bar';
import { Link } from 'react-router-dom';
import LoggedInButton from './LoggedInButton/LoggedInButton';
import LoginButton from './LoginButton/LoginButton';
import CartModal from './CartButton/CartModal';
//import Cart from './Cart/Cart';
//import props from './../../Views/app';

class Navbar extends Component {

  state = {
    logged: true,
    userInput: '',
  };



  handleChange = (event, logged) => {
    this.setState({ logged: logged });
  };

  logOutHandler = () => {
    this.setState({ logged: false });
  }

  userInputHandler = (event) => {
    this.setState({ userInput: event.target.value })
  }


  handleClick = (i, j) => {

    let cartitem = this.state.cartItem + 1;
    let cartamount = this.state.cartAmount + i;
    let newcartarray = this.state.cartarray.concat(j);
    this.setState({ cartItem: cartitem, cartAmount: cartamount, cartarray: newcartarray });
    alert('Item ' + j.title + ' added to shopping cart!')
  };

  handleDelete = (k) => {

    let newcartarray = this.state.cartarray.slice();
    let cartitemindex = newcartarray.indexOf(k);
    let cartamount = this.state.cartAmount - k.author;
    newcartarray.splice(cartitemindex, 1);
    let cartitem = this.state.cartItem - 1;


    this.setState({ cartarray: newcartarray, cartItem: cartitem, cartAmount: cartamount });
  };



  render() {

    return (
      <div>
        <AppBar
          title="TechCheck"
          onClick={this.handleChange}
          iconElementRight={this.state.logged ? <LoggedInButton /> : <LoginButton />}
          logOut={this.logOutHandler}
        >
          <CartModal cartitem={this.props.cartitem} cartamount={this.props.cartamount} cartarray={this.props.cartarray}
          />


        </AppBar>

        <div className='routeDiv'>
          <FlatButton> <Link to='/'>Home</Link> </FlatButton>
          <FlatButton> <Link to='/search_results'>Search Results</Link> </FlatButton>
          <FlatButton style={{ paddingLeft: '10px' }}> <Link to='/product_detail'> Product Details</Link> </FlatButton>
          <FlatButton style={{ paddingLeft: '10px' }}> <Link to='/sell_product'>Sell Product</Link> </FlatButton>
          <FlatButton style={{ paddingLeft: '10px' }}> <Link to='/registration'> Registration </Link> </FlatButton>
          <FlatButton ><Link to='/api/users/profile/'>user Profile</Link></FlatButton>
        </div>

        <SearchBar
          dataSource={this.state.dataSource}
          onChange={this.userInputHandler}
          // (value) => this.setState({ dataSource: [value, value + value, value + value + value] })
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
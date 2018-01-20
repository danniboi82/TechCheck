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
import CheckOutPage from '../CheckOutPage/CheckOutPage';
import RaisedButton from 'material-ui/RaisedButton';
import axios from "axios";

class Navbar extends Component {

  state = {
    dataSource:''
  //   logged: false,
  //   userInput: '',
  //   userDataObj: {},
  //   // profilePic:'',
  //   // userId:'',
  //   // email:'',
  //   // firstName:'',
  //   // lastName:'',
  //   // phoneNumber:'',
  //   verified: false,
  //   // createdAt:'',
  //   // active:false
  };

  // componentDidMount = (props) => {
  //   console.log(this.props)
  //   if(this.props.logged==true){
  //     this.setState({
  //       logged:true
  //     })
  //   }

    //console.log(sessionStorage.auth)
    
  // }

 



  render() {

    return (
      
      
      <div>
        {console.log(this.props
)}
        {!this.props.userdata.verified && this.props.logged &&
          <div className='verify'>
            Please verify your email address. <br /><a href='https://www.google.com/gmail/about/#'> Gmail  </a>
            <a href='https://login.yahoo.com/?.src=ym&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2F'> Yahoo  </a>
            <a href='https://my.screenname.aol.com/_cqr/login/login.psp?sitedomain=sns.mail.aol.com&seamless=novl&lang=en&locale=US&authLev=0&siteState=uv%3AAOL%7Crt%3ASTD%7Cat%3ASNS%7Clc%3Aen_US%7Cld%3Amail.aol.com%7Csnt%3AScreenName%7Csid%3A75be8f73-edfd-4559-8c55-945b9c9b2f4f%7Cqp%3A%7C&offerId=newmail-en-us-v2'> Aol </a>
            <a href='https://www.icloud.com/#mail'> iCloud </a>
          </div>
        }

        
        <AppBar
          title="TechCheck"
          showMenuIconButton={false}
          iconElementRight={this.state.logged ? <LoggedInButton userdata={this.props.userdata} logout={this.props.logoutFunction} /> : <LoginButton />}

        >
          <CartModal cartitem={this.props.cartitem} cartamount={this.props.cartamount} cartarray={this.props.cartarray}
            onClick={this.props.onClick}
          />
        </AppBar>

        <div className='routeDiv'>
          <FlatButton> <Link to='/'>Home</Link> </FlatButton>
          <FlatButton> <Link to='/search_results'>Search Results</Link> </FlatButton>
          <FlatButton style={{ paddingLeft: '10px' }}> <Link to='/product_detail/3214e644-9c1c-48ca-baba-d699af75a1ea'> Product Details</Link> </FlatButton>
          <FlatButton style={{ paddingLeft: '10px' }}> <Link to='/sell_product'>Sell Product</Link> </FlatButton>
          <FlatButton style={{ paddingLeft: '10px' }}> <Link to='/registration'> Registration </Link> </FlatButton>
          <FlatButton ><Link to='/api/users/profile/'>user Profile</Link></FlatButton>
          <Link to='/check_out'><FlatButton>Check Out</FlatButton></Link>
        </div>

        {<SearchBar
          // dataSource={this.state.dataSource}
         // onChange={this.props.userInputHandler}
         // onRequestSearch={(value) => this.setState({ dataSource: [value, value + value, value + value + value] })}
          style={{
            margin: '0 auto',
            maxWidth: '100%',
            backgroundColor: '#344b70',
            color: 'black'
          }}
        />}
      </div>
    );
  }
}

export default Navbar;
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBar from 'material-ui-search-bar';
import LoggedInButton from './LoggedInButton/LoggedInButton';
import LoginButton from './LoginButton/LoginButton';
import CartModal from './CartButton/CartModal';

class Navbar extends Component {

  state = {
    dataSource:'',
    search:''
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
onsubmit =()=>{
  console.log(this.state.search)
  window.location=  `/searchResults/${this.state.search}`
}
 componentDidMount=()=>{
  // console.log(this.props
  // )
 }

 componentWillReceiveProps=()=>{
  // console.log(this.props
  // )
 }
 onChange = (e) => {

  this.setState({
      search: e
  });
}
  render() {

    

    return (
      <div>
        {!this.props.userdata.verified && this.props.logged &&
          <div className='verify'>
            Please verify your email address. <br /><a href='https://www.google.com/gmail/about/#'> Gmail  </a>
            <a href='https://login.yahoo.com/?.src=ym&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2F'> Yahoo  </a>
            <a href='https://my.screenname.aol.com/_cqr/login/login.psp?sitedomain=sns.mail.aol.com&seamless=novl&lang=en&locale=US&authLev=0&siteState=uv%3AAOL%7Crt%3ASTD%7Cat%3ASNS%7Clc%3Aen_US%7Cld%3Amail.aol.com%7Csnt%3AScreenName%7Csid%3A75be8f73-edfd-4559-8c55-945b9c9b2f4f%7Cqp%3A%7C&offerId=newmail-en-us-v2'> Aol </a>
            <a href='https://www.icloud.com/#mail'> iCloud </a>
          </div>
        }

        
        <AppBar
          title={<img src="https://i.imgur.com/89X4t5A.png" alt="TClogo" style={{ margin: 'auto', width: '80px', height : '80px' }} />}
          style={{ backgroundColor: "#2196F3", }}
          showMenuIconButton={false}
          iconElementRight={this.props.logged ? <LoggedInButton userdata={this.props.userdata} logout={this.props.logoutFunction} /> : <LoginButton />}
        >
        
          <CartModal cartitem={this.props.cartitem} cartamount={this.props.cartamount} cartarray={this.props.cartarray}
            onClick={this.props.onClick}
          />
        </AppBar>

        {<SearchBar
        value={this.state.search}
        name='search'
        spellCheck={true}
          //dataSource={this.state.search}
          onChange={this.onChange}
         onRequestSearch={this.onsubmit}
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
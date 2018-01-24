import React, {Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './recover.scss'


class confirmation extends Component{
    goHome =()=>{window.location='/'}
  render() {
    return (   
        <MuiThemeProvider> 
        <div>
       
        You have changed your password sucsessfully. 
        You will recieve a confirmation email

    <br />
      <RaisedButton  onClick={this.goHome}>
  Go to main page
      </RaisedButton>
        </div>
        </MuiThemeProvider>
    )
  }

}
export default confirmation;
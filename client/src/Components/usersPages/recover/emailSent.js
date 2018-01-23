import React, {Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class recover extends Component{

goHome =()=>{window.location='/'}

  render() {
    return (   
        <MuiThemeProvider> 
        <div>
        We have sent you an email to reset your password. <br/>
      Please click the link and reset your password. <br/> Don't forget to check your spam folder.
        <br/>
       
    <br />
     <RaisedButton  onClick={this.goHome}>
    Main Page
                        </RaisedButton>
        </div>
        </MuiThemeProvider>
    )
  }

}
export default recover;
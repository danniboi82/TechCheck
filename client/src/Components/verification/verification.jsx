import React, {Component } from 'react';
import verification from '../Data/verification-api'
import { Route } from 'react-router-dom';

class verify extends Component{
state = {
   name:""
  };

  
  componentDidMount = () => {
    verification.verification(this.props.match.params.email).then(dataPoints => {
        console.log(dataPoints)
    //   this.setState({
       
    //   })
    });
  };
  render() {
    return (
      <div className="verification">
      You have been verified 
      </div>
    )
  }

}
export default verify;
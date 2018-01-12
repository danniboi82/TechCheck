import React, {Component } from 'react';
import users from '../Data/users-api'
import { Route } from 'react-router-dom';

class verify extends Component{
state = {
   name:""
  };

  
  componentDidMount = () => {
    users.verification(this.props.match.params.email).then(dataPoints => {
        console.log(dataPoints.data)
     this.setState({
      name:dataPoints.data
     })
    });
  };
  render() {
    return (
      <div className="verification">
     {this.state.name}, You have been verified. You can now post or buy items.  
      </div>
    )
  }

}
export default verify;
import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Avatar from 'material-ui/Avatar';
import Link from 'react-router-dom';

const loggedIn = (props) => (
  
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >{console.log(props)}
      <MenuItem>
        <Avatar
          src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${props.userData.profilePic}`}
          size={30}
          style={{display: 'in-line', margin: 'auto'}}
          href={`/api/users/profile/${props.userData.userId}`}
        /> {props.userData.firstName +' '+props.userData.lastName}
      </MenuItem>
    <MenuItem primaryText="My Products" />
      {/* User props from NavBar logOut={this.logOutHandler} */}
      <MenuItem 
      primaryText="Sign out" 
      onClick={props.logOut}/>
    </IconMenu>
  );

  loggedIn.muiName = 'IconMenu';

export default loggedIn;
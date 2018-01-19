import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import axios from "axios";

const sellProductStyles = {
    button: {
        margin: 12,
        color: '#01FEC3',
    },
    categorySelectField: {
        textAlign: 'left',
    },
    otherDetailsField: {
        padding: '50px 0',
    },
    block: {
        maxWidth: 250,
    },
    customWidth: {
        width: 150,
    },
    radioButton: {
        marginBottom: 16,
        color: "grey"
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
    center: {
        maxWidth: 200,
    },
    formWrapper: {
        padding: '30px 0',
    }
};

const formData = new FormData();
class addProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            productName: "",
            serialNumber: "",
            category: "",
            price: "",
            condition: "",
            warranty: "",
            packaging: "",
            productDescription: "",
            userUploadImage1: "",
            userUploadImage2: ""
        }

    }
    componentDidMount=()=>{
        this.setState({
            userId:this.props.match.params.id
        })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    imageChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value.split('\\').pop()
        });
        const file = e.target.files[0]



        const dataPic = new FormData();
        dataPic.append('upl', file, file.name);
        console.log(dataPic)
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post("/api/products/upload", dataPic, config)




    }
    onSubmit = (e) => {
        e.preventDefault();

        const {
            userId,
            productName,
            serialNumber,
            category,
            price,
            productDescription,
            condition,
            warranty,
            packaging,
            userUploadImage1,
            userUploadImage2
    } = this.state;

        axios.post('/api/products', {userId, productName, serialNumber, category, price, productDescription, condition, warranty, packaging, userUploadImage1, userUploadImage2 })
            .then((result) => {
                if (result == 'already') {
                    alert('There is already an account with that email addres,please try a diffrent one')
                } else {

                }
                // }).then(function(){
                //     axios.post("/api/users/upload", {

                //         data: formData,
                //         contentType: false,
                //         processData: false,
                //         success: function (data) {

                //         }

                //       })
            })
        window.location = `/user/products/${this.state.userId}`
    }

    handleChange = (event, index, category) => this.setState({ category });
    handleChangeCondition = (event, index, condition) => this.setState({ condition });
    handleChangeWarranty = (event, index, warranty) => this.setState({ warranty });
    handleChangePackaging = (event, index, packaging) => this.setState({ packaging });
    render() {

        return (
            <MuiThemeProvider>
                {/* <div style={{textAlign: 'center', display: 'inline-block'}}> */}
                <div className='FormWrapper' style={sellProductStyles.formWrapper}>
                    <div>
                        <TextField
                            hintText="Full Name of Product"
                            name="productName"
                            value={this.state.productName}
                            floatingLabelText="Product Name"
                            onChange={this.onChange}
                            defaultValue={this.state.productName}
                        />
                    </div>
                    <div>
                        <TextField
                            hintText="Serial Number"
                            name="serialNumber"
                            value={this.state.serialNumber}
                            floatingLabelText="Serial Number"
                            onChange={this.onChange}
                            defaultValue={this.state.serialNumber}
                        />
                    </div>
                    <div>
                        <SelectField
                            name="category"
                            style={sellProductStyles.categorySelectField}
                            value={this.state.category}
                            onChange={this.handleChange}
                            floatingLabelText="Category"
                            defaultValue={this.state.
                        >
                            <MenuItem value={"Graphic Card"} primaryText="Graphic Card" />
                            <MenuItem value={"Motherboard"} primaryText="Motherboard" />
                            <MenuItem value={"Processor"} primaryText="Processor" />
                            <MenuItem value={"Hard Drive"} primaryText="Hard Drive" />
                            <MenuItem value={"RAM"} primaryText="RAM" />
                            <MenuItem value={"Power Supply"} primaryText="Power Supply" />
                            <MenuItem value={"Tower"} primaryText="Tower" />
                            <MenuItem value={"PC"} primaryText="PC" />
                            <MenuItem value={"Laptop"} primaryText="Laptop" />
                            <MenuItem value={"Gaming Peripheral"} primaryText="Gaming Peripheral" />
                            <MenuItem value={"Gaming Console"} primaryText="Gaming Console" />
                        </SelectField>
                    </div>
                    <div>
                        <TextField
                            name="price"
                            value={this.state.price}
                            floatingLabelText="Price"
                            onChange={this.onChange}
                            hintText="Price"
                        />
                    </div>
                    <div
                        style={sellProductStyles.otherDetailsField}
                    >
                        <TextField
                            name="productDescription"
                            hintText="Other Details or PC/Laptop Specifications"
                            multiLine={true}
                            underlineShow={true}
                            rows={1}
                            rowsMax={4}
                            onChange={this.onChange}
                            value={this.state.productDescription}
                        />
                    </div>
                    <div>
                        <SelectField
                            name="condition"
                            style={sellProductStyles.categorySelectField}
                            value={this.state.condition}
                            onChange={this.handleChangeCondition}
                            floatingLabelText="Product Condition"
                        >
                            <MenuItem value={"New"} primaryText="New" />
                            <MenuItem value={"Used"} primaryText="Used" />
                        </SelectField>
                    </div>
                    <div>
                        <SelectField
                            name="warranty"
                            style={sellProductStyles.categorySelectField}
                            value={this.state.warranty}
                            onChange={this.handleChangeWarranty}
                            floatingLabelText="Product Warranty"
                        >
                            <MenuItem value={"Yes"} primaryText="Yes" />
                            <MenuItem value={"No"} primaryText="No" />
                        </SelectField>
                    </div>

                    <div>
                        <SelectField
                            name="packaging"
                            style={sellProductStyles.categorySelectField}
                            value={this.state.packaging}
                            onChange={this.handleChangePackaging}
                            floatingLabelText="Original Packaging"
                        >
                            <MenuItem value={"Yes"} primaryText="Yes" />
                            <MenuItem value={"No"} primaryText="No" />
                        </SelectField>
                    </div>
                    <br />

                    <div>
                        <RaisedButton
                            label="Upload Product Image #1"
                            labelPosition="before"
                            style={sellProductStyles.button}
                            containerElement="label"
                        >
                            <input name="userUploadImage1" type="file" onChange={this.imageChange} style={sellProductStyles.exampleImageInput} />
                        </RaisedButton>
                        <RaisedButton
                            label="Upload Product Image #2"
                            labelPosition="before"
                            style={sellProductStyles.button}
                            containerElement="label"
                        >
                            <input name="userUploadImage2" type="file" onChange={this.imageChange} style={sellProductStyles.exampleImageInput} />
                        </RaisedButton>
                    </div>

                    <div>
                        <RaisedButton onClick={this.onSubmit} label="Submit!" />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default editProduct;

import React, { Component } from 'react';
import users from '../../Data/users-api'
//import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import './userProfile.css';
import Avatar from 'material-ui/Avatar';
import notFound from './404.jpg'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class verify extends Component {

  state = {
    userId: "",
    productName: "",
    serialNumber: "",
    category: "",
    price: "",
    condition: "",
    warranty: "",
    packaging: "",
    productDescription: "",
    userUploadImage1: "",
    userUploadImage2: "",
    edit: false,
    noUser: false
  }
  changedToEdit = () => {
    this.setState({
      edit: true
    })
  }
  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
 
}
  onsubmit=()=>{
 this.setState({
   edit:false
 })
  }
  componentDidMount = () => {
    console.log('this is my test')
    console.log(this.props.match.params.id)
    users.userProfile(this.props.match.params.id).then(dataPoints => {
      console.log(dataPoints)
      if (dataPoints.data === 'noUser') {
        this.setState({
          noUser: true,
          name: '404',
          notPRofile: notFound,
          userId: '404',
          email: '404',
          active: '404',
          address: '404',
          memberSince: '404',
          phoneNumber: '404'

        })
      } else {


        this.setState({
          name: dataPoints.data.firstName + ' ' + dataPoints.data.lastName,
          profilePic: dataPoints.data.profilePic,
          userId: dataPoints.data.id,
          email: dataPoints.data.email,
          active: dataPoints.data.active,
          address: dataPoints.data.address,
          memberSince: dataPoints.data.createdAt,
          phoneNumber: dataPoints.data.phoneNumber,
          userId: dataPoints.data.userId,
          productName: dataPoints.data.productName,
          serialNumber: dataPoints.data.serialNumber,
          category: dataPoints.data.category,
          price: dataPoints.data.price,
          condition: dataPoints.data.condition,
          warranty: dataPoints.data.warranty,
          packaging: dataPoints.data.packaging,
          productDescription: dataPoints.data.productDescription,
          userUploadImage1: dataPoints.data.userUploadImage1,
          userUploadImage2: dataPoints.data.userUploadImage2
        })
      }
    });

  }

  render() {
    return (
      // <Link to={`/edit/user/${this.state.userId}`}> 
      <div className="Profile">
    
        <Paper >
          {this.state.noUser &&
            <h1>404 No User Found</h1>
          }
          {!this.state.edit?
          <Avatar size={150} onChange={this.onChange} src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${this.state.profilePic || this.state.notPRofile}`} />:<div><input type='file' ></input> <br/></div>}
         

          <div className='UserInfo'>

{!this.state.edit ? 
            <div className='UserInfoDiv'><TextField  floatingLabelText="Name" disabled={true} value={this.state.name}/></div>: <div><TextField floatingLabelText="Name" name='name' onChange={this.onChange} defaultValue={this.state.name}/> <br/></div>}
          
           {!this.state.edit ? 
            <div className='UserInfoDiv'><TextField  floatingLabelText="Email" disabled={true} value={this.state.email}/></div>: <div><TextField floatingLabelText="Email" name='email' onChange={this.onChange} defaultValue={this.state.email}/> <br/></div>}
  
            {!this.state.edit ?
            <div className='UserInfoDiv'><TextField  floatingLabelText="Address" disabled={true} value={this.state.address}/></div>:<div><TextField floatingLabelText="Address" name='address' onChange={this.onChange} defaultValue={this.state.address}/> <br/></div>}
    
         {!this.state.edit?
            <div className='UserInfoDiv'><TextField  floatingLabelText="Phone Number" disabled={true} value={this.state.phoneNumber}/></div>:<div><TextField floatingLabelText="Phone Number" name='phoneNumber' onChange={this.onChange} defaultValue={this.state.phoneNumber}/> <br/></div>}
         
          {!this.state.edit ?
            <div className='UserInfoDiv'><TextField  floatingLabelText="User ID" disabled={true} value={this.state.userId}/></div>:<div><TextField floatingLabelText="User ID" disabled={true} name='userId' onChange={this.onChange} defaultValue={this.state.userId}/> <br/></div>}
             
            {!this.state.edit ?
            <div className='UserInfoDiv'><TextField  floatingLabelText="Member Since" disabled={true} value={this.state.memberSince}/></div>:<div><TextField floatingLabelText="Member Since" disabled={true} name='memberSince' onChange={this.onChange} defaultValue={this.state.memberSince}/> <br/></div>}
   {!this.state.edit ?
        
<RaisedButton label="Edit Information" onClick={this.changedToEdit}Edit Profile />:<RaisedButton label="Submit Changes" onClick={this.onsubmit}change Profile/>}

          </div>
        </Paper>

      </div>
    )
  }

}
export default verify;

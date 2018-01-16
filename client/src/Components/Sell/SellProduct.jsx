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

        axios.post('/api/products', { productName, serialNumber, category, price, productDescription, condition, warranty, packaging, userUploadImage1, userUploadImage2 })
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
                        />
                    </div>
                    <div>
                        <TextField
                            hintText="Serial Number"
                            name="serialNumber"
                            value={this.state.serialNumber}
                            floatingLabelText="Serial Number"
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <SelectField
                            name="category"
                            style={sellProductStyles.categorySelectField}
                            value={this.state.category}
                            onChange={this.handleChange}
                            floatingLabelText="Category"
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
                            underLineShow={true}
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
export default addProduct;

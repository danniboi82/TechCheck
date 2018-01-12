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


class addProduct extends React.Component {
    state = {
        error: null,
        product: {
            name: "",
            category: "",
            price: "",
            condition: "",
            packaging: "",
            description: "",
            pic1: "",
            pic2: ""
        }
    }
    render() {

        return (
            <MuiThemeProvider>
                {/* <div style={{textAlign: 'center', display: 'inline-block'}}> */}
                <div className='FormWrapper' style={sellProductStyles.formWrapper}>
                    <div>
                        <TextField
                            hintText="Full Name of Product"
                        />
                    </div>
                    <div>
                        <SelectField
                            style={sellProductStyles.categorySelectField}
                            value={this.state.value}
                            onChange={this.handleChange}
                            floatingLabelText="Category"
                        >
                            <MenuItem value="Graphic Card" primaryText="Graphic Card" />
                            <MenuItem value="Motherboard" primaryText="Motherboard" />
                            <MenuItem value="Processor" primaryText="Processor" />
                            <MenuItem value="Hard Drive" primaryText="Hard Drive" />
                            <MenuItem value="RAM" primaryText="RAM" />
                            <MenuItem value="Power Supply" primaryText="Power Supply" />
                            <MenuItem value="Tower" primaryText="Tower" />
                            <MenuItem value="PC" primaryText="PC" />
                            <MenuItem value="Laptop" primaryText="Laptop" />
                            <MenuItem value="Gaming Peripheral" primaryText="Gaming Peripheral" />
                        </SelectField>
                    </div>
                    <div>
                        <TextField
                            hintText="Price"
                        />
                    </div>
                    <div 
                    style={sellProductStyles.otherDetailsField}
                    >
                        <TextField
                            hintText="Other Details or PC/Laptop Specifications"
                            multiLine={true}
                            underLineShow={true}
                            rows={1}
                            rowsMax={4}
                        />
                    </div>

                    <div style={{ textAlign: 'center', maxWidth: 200, marginLeft: 'auto', marginRight: 'auto' }}>
                        <Subheader> Product Condition :</Subheader>
                        <RadioButtonGroup name="condition" defaultSelected="not_light">
                            <RadioButton
                                value="new"
                                label="New"
                                style={sellProductStyles.radioButton}
                            /><RadioButton
                                value="used"
                                label="Used"
                                style={sellProductStyles.radioButton}
                            />
                        </RadioButtonGroup>
                    </div>

                    <div style={{ textAlign: 'center', maxWidth: 200, marginLeft: 'auto', marginRight: 'auto' }}>
                        <Checkbox
                            label="Original Packaging"
                            style={sellProductStyles.checkbox}
                        />
                    </div>
                    <br />


                    <div>
                        <RaisedButton
                            label="Upload Product Image"
                            labelPosition="before"
                            style={sellProductStyles.button}
                            containerElement="label"
                        >
                            <input type="file" style={sellProductStyles.exampleImageInput} />
                        </RaisedButton>
                        <RaisedButton
                            label="Upload Product Image 2"
                            labelPosition="before"
                            style={sellProductStyles.button}
                            containerElement="label"
                        >
                            <input type="file" style={sellProductStyles.exampleImageInput} />
                        </RaisedButton>
                    </div>

                    <div>
                        <RaisedButton onClick={this.onClick} label="Submit!" />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default addProduct;
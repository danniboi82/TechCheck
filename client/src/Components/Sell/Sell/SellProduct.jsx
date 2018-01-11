import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const addProductStyles = {
    h1: {
        color: 'white',
    },

    buttonDiv: {
        backgroundColor: 'white',
        fontSize: '20px'
    },

    wrapper: {
        backgroundColor: 'black',
        textAlign: 'center',
    },
}

const addProduct = () => {
    return (
        <div style={addProductStyles.wrapper}>
            <h1 style={addProductStyles.h1}> Add Your Product </h1>
            <Subheader> Name :</Subheader>
            <TextField
                hintText="Full Name of Product"
            /><br />
            <Subheader> Category :</Subheader>
            <SelectField {...$('color3')} floatingLabelText="Color 3">
            <MenuItem value="Red" primaryText="Red" />
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
            <Subheader> Price :</Subheader>
            <TextField
                hintText="Price you want to list"
            /><br />
            <Subheader> Condition :</Subheader>
            <RadioButtonGroup {...$('color5')} className="mb-20">
            <RadioButton value="New" label="New" />
            <RadioButton value="Used" label="Used" />
            </RadioButtonGroup>
            <br />
            <Subheader> Original Packaging :</Subheader>
            <Checkbox {...$('checkbox')} className="mb-20" label="Original Packaging" />
            <br />
            <Subheader> Description :</Subheader>
            <TextField
                hintText="Other Details or PC/Laptop Specifications"
            /><br />
           <RaisedButton
            label="Upload Product Image"
            labelPosition="before"
            style={styles.button}
            containerElement="label"
            >
            <input type="file" style={styles.exampleImageInput} />
            </RaisedButton>
            <RaisedButton
            label="Upload Product Image 2"
            labelPosition="before"
            style={styles.button}
            containerElement="label"
            >
            <input type="file" style={styles.exampleImageInput} />
            </RaisedButton>
            <div style={{ padding: '20px' }}>
                <FlatButton style={addProductStyles.buttonDiv} label='Submit' primary={true} />
            </div>
        </div>
    );
}

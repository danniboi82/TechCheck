import React, { Component } from 'react';
import products from '../../Data/products-api'
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import './UserProducts.css';
import { GridList, GridTile } from 'material-ui/GridList';
import { List, ListItem } from 'material-ui/List';
import { BrowserRouter, Link, NavLink, Switch } from 'react-router-dom';
// import {
//     Table,
//     TableBody,
//     TableHeader,
//     TableHeaderColumn,
//     TableRow,
//     TableRowColumn,
// } from 'material-ui/Table';

import products1 from '../../Data/products-api'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const productDetailStyles = {
    h1: {
        color: 'white',
    },

    purchaseButton: {
        backgroundColor: 'white',
        marginTop: '30px',
        width: "30%",
        height: '50px'
    },

    wrapper: {
        backgroundColor: 'black',
        textAlign: 'center',
    },

}



class userProducts extends Component {

    state = {
        userProducts: [],
        userId:""

    }

    componentDidMount = () => {

        console.log('this is my test')


        console.log(this.props.match.params.id)
        products1.userProfile(this.props.match.params.id).then(dataPoints => {

            console.log(dataPoints)
        this.setState({
            userProducts: dataPoints.data,
            userId:this.props.match.params.id
        })
                       
        });
     
    }

    deleteProductHandler = (id) => {
        const ogProductList = this.state.userProducts;
        ogProductList.splice(id, 1);
        const updatedProductList = ogProductList;
        this.setState({
            userProducts: updatedProductList
        })
        console.log(this.state.userProducts);
    }

    render() {
        return (
            <div className='CheckOutPageDiv'>
                <div>
                    <h1>User Products</h1>
                </div>
                {console.log('HELLO', this.state.userProducts)}
                {this.state.userProducts.map((card, id) => (
                    <Paper
                        zDepth={5}
                        className='ProductPaper'
                        key={card.id}
                    >
                        <div className='ImageDiv'>
                            <img className='ProductImage' src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${card.userUploadImage1}`} alt="image1" />
                        </div>
                        <div className='ProductDescription'>
                            Description: {card.productName}
                        </div>
                        <FlatButton label='Remove'
                            onClick={() => this.deleteProductHandler(id)} />
                    </Paper>
                ))}
                <div className='AddProductDiv'>
                    <Link to={`/sell_product/${this.state.userId}`}><FlatButton style={{ backgroundColor: 'blue' }} label='Add Product' /></Link>
                </div>

            </div>
        )
    }
}


export default userProducts;
import React, { Component } from 'react';
import products from '../Data/products-api'
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { GridList, GridTile } from 'material-ui/GridList';
import { List, ListItem } from 'material-ui/List';
import { BrowserRouter, Link, NavLink, Switch } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


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

    paperWrapper: {
        display: 'inline-block',
        backgroundColor: 'black',
        width: '500px',
        height: '300px',
    },
    grid: {
        div: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },

        gridList: {
            width: '80%',
            height: '80%',
            overflowY: 'auto',
        },

        gridTile: {

        }
    }

};
class userProduct extends Component {

    state = {
        id: "",
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

    componentDidMount = () => {

        console.log('this is my test')

        console.log(this.props.match.params.id)
        users.userProfile(this.props.match.params.id).then(dataPoints => {
            console.log(dataPoints)
            this.setState({
                id: dataPoints.data.id,
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
        });
        const s3bucket = 'https://s3-us-west-1.amazonaws.com/techcheckbucket/' + `${this.state.userUploadImage1}`
        const s3bucket2 = 'https://s3-us-west-1.amazonaws.com/techcheckbucket/' + `${this.state.userUploadImage2}`
    }

    //{this.state.name}
    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        {dataPoints.map((col) => (
                            <TableHeaderColumn
                                key={col.id}
                            >
                            </TableHeaderColumn> ,
                            <TableHeaderColumn
                                key={col.productName}
                            >
                            </TableHeaderColumn> ,
                            <TableHeaderColumn
                                key={col.productSold}
                            >
                            </TableHeaderColumn>
                        ))}
                    </TableRow>
                </TableHeader>
            </Table>

        );

    }
}







export default productDetail;
import React, { Component } from 'react';
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
import products from '../../Data/products-api'
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
        userProducts:[],
        // id: "",
        // productName: "",
        // serialNumber: "",
        // category: "",
        // price: "",
        // condition: "",
        // warranty: "",
        // packaging: "",
        // productDescription: "",
        // userUploadImage1: "",
        // userUploadImage2: ""

    }

    componentDidMount = () => {
let products=[];
        console.log('this is my test')

        console.log(this.props.match.params.id)
        products.userProfile(this.props.match.params.id).then(dataPoints => {
            console.log(dataPoints)
            for(let i=0;i<dataPoints.data.length;i++){
             
             var userProducts= {id: dataPoints.data.id,
                       productName: dataPoints.data.productName,
                       serialNumber: dataPoints.data.serialNumber,
                       category: dataPoints.data.category,
                       price: dataPoints.data.price,
                       condition: dataPoints.data.condition,
                       warranty: dataPoints.data.warranty,
                       packaging: dataPoints.data.packaging,
                       productDescription: dataPoints.data.productDescription,
                       userUploadImage1: dataPoints.data.userUploadImage1,
                       userUploadImage2: dataPoints.data.userUploadImage2}
          
            }
            products.push(userProducts)
            
        });
        console.log(this.userProducts)
        const s3bucket = 'https://s3-us-west-1.amazonaws.com/techcheckbucket/' + `${this.state.userUploadImage1}`
        const s3bucket2 = 'https://s3-us-west-1.amazonaws.com/techcheckbucket/' + `${this.state.userUploadImage2}`
    }

    //{this.state.name}
    render() {
        return (
<MuiThemeProvider>
           
            <Table>
                <TableHeader>
                    <TableRow>
                        {this.userProducts.map((col) => (
                            <TableHeaderColumn
                                key={col.userId}
                              
                            >{console.log(this.state.userProducts)}
                            </TableHeaderColumn> ,
                            <TableHeaderColumn
                                key={col.userId}
                            >
                            </TableHeaderColumn> ,
                            <TableHeaderColumn
                                key={col.userId}
                            >
                            </TableHeaderColumn>
                        ))} }
                    </TableRow>
                </TableHeader>
            </Table>
            </MuiThemeProvider>
       );

    }
}







export default userProduct;
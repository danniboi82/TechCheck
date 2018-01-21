import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { GridList, GridTile } from 'material-ui/GridList';
import { List, ListItem } from 'material-ui/List';
import { BrowserRouter, Link, NavLink, Switch } from 'react-router-dom';
import products1 from '../../Data/products-api'


const productDetailStyles = {
    h1: {
        backgroundColor: '#4C6A92', 
        margin: '0px auto', 
        padding: '25px 0', 
        borderTop: '1px solid white', 
        color: 'white' 
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

    },
    listStyle:{
        border: '1px solid white',
    }

};

class productDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productId: "",
            userId: "",
            productName: "",
            serialNumber: "",
            category: "",
            price: "",
            productDescription: "",
            condition: "",
            warranty: "",
            packaging: "",
            photos: [],

            verified: "",
            status: "",
            createdAt: ""
          
        }

    }
    componentDidMount = () => {
        console.log('product detail')
        console.log(this.props);
        products1.Product(this.props.match.params.id).then(data => {
            console.log(data)
            const photosImg = {
                img: data.data.userUploadImage1,
                title: data.data.productName,
            }
            const photosImg2 = {
                img: data.data.userUploadImage2,

            }
            const imgs = [
                photosImg,
                photosImg2
            ]
            this.setState({
                photos: imgs,
                productId: data.data.id,
                userId: data.data.userId,
                productName: data.data.productName,
                serialNumber: data.data.serialNumber,
                category: data.data.category,
                price: data.data.price,
                productDescription: data.data.productDescription,
                condition: data.data.condition,
                warranty: data.data.warranty,
                packaging: data.data.packaging,
                verified: data.data.verified,
                status: data.data.status,
                createdAt: data.data.createdAt
            })
        })
    }
    render() {
        console.log(this.state.photos);
        console.log(this.props);
        return (

            <div style={productDetailStyles.wrapper}>
                <h1 style={productDetailStyles.h1}> Product Details </h1>

                <div className='GridListDiv' style={productDetailStyles.grid.div}>
                    <GridList
                        cellHeight={300}
                        style={productDetailStyles.grid.gridList}
                        cols={3}
                        padding={25}
                    >
                        {/* {console.log(this.state.photos)} */}
                        {this.state.photos.map((tile) => (
                            <GridTile
                                style={productDetailStyles.grid.gridTile}
                                key={tile.img}
                            >
                                <img src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${tile.img}`} alt='productimage' />
                                {/* <img src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${this.state.userUploadImage2}`} alt='productimage' /> */}
                                {/* <img src={tile.img} alt='productimage' /> */}
                            </GridTile>
                        ))}
                    </GridList>


                    <div className='PaperDiv'>
                        <Subheader style={{ color: 'white', fontSize: '50px', padding: '30px' }}>{this.state.productName}</Subheader>
                        <Paper style={productDetailStyles.paperWrapper}>
                            <List>
                                <ListItem style={productDetailStyles.listStyle}>Price :${this.state.price} </ListItem>
                                <ListItem style={productDetailStyles.listStyle}>Category : </ListItem>
                                <ListItem style={productDetailStyles.listStyle}>Condition : {this.state.condition}</ListItem>
                                <ListItem style={productDetailStyles.listStyle}>Product Description : {this.state.productDescription}</ListItem>
                                <ListItem style={productDetailStyles.listStyle}>Warranty : {this.state.warranty}</ListItem>
                            </List>
                        </Paper>
                        <Paper style={productDetailStyles.paperWrapper}>
                            <List>
                                <ListItem style={productDetailStyles.listStyle}>Packaging : {this.state.packaging}</ListItem>
                                <ListItem style={productDetailStyles.listStyle}>Serial Number : {this.state.serialNumber}</ListItem>
                                <ListItem style={productDetailStyles.listStyle}>Prouduct Id :{this.state.productId}</ListItem>
                                <ListItem style={productDetailStyles.listStyle}>Test Results : </ListItem>
                                <ListItem style={productDetailStyles.listStyle}>Product Status : {this.state.status}</ListItem>
                            </List>
                        </Paper>
                    </div>
                </div>

                <div style={{ paddingBottom: '60px' }}>
                    <Link to='/'><FlatButton
                        style={productDetailStyles.purchaseButton}
                        label='Purchase'
                        primary={true}
                        onClick={() => this.props.onClick(this.state.price,  this.state)} />
                    </Link>
                </div>
            </div>
        );
    }
}

export default productDetail;
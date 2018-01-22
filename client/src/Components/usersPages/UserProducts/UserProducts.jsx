import React, { Component } from 'react';
import products from '../../Data/products-api'
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import './UserProducts.css';
import products1 from '../../Data/products-api';
import { Link } from 'react-router-dom';
import axios from "axios";

class userProducts extends Component {

    state = {
        userProducts: [],
        userId: "",
        s3ornot: false,
        userUploadImage1: [],
        page: '',
        limit: ""

    }

    componentDidMount = () => {

        // console.log('this is my test')
        let id = this.props.match.params.id

        console.log(id)
        axios({
            method: 'post',
            url: `/api/products/user/products`,
            data: {
                userId: this.props.match.params.id,
                page: 0,
                limit: 15

            }
        }).then(dataPoints => {

            // console.log(dataPoints)
            this.setState({
                userProducts: dataPoints.data,
                userId: this.props.match.params.id,
                userUploadImage1: dataPoints.data.userUploadImage1,
                page: 0,
            })
            // console.log(this.state.userProducts)

            console.log(Math.floor(new Date().getTime() / 1000) / 1000)
        });
    }
    console = () => {
        console.log(this.state.limit)
        axios({
            method: 'post',
            url: `/api/products/user/products`,
            data: {
                userId: this.props.match.params.id,
                page: this.state.page,
                limit: this.state.limit

            }
        }).then(next => {
            console.log(next)
            this.setState({
                userProducts: next.data
            })
        })
    }
    limit = (e) => {

        console.log(e.currentTarget.attributes.value.nodeValue)
        this.setState({

            limit: e.currentTarget.attributes.value.nodeValue
        }, this.console)


    }
    pages = (e) => {


        this.setState({
            page: e.currentTarget.attributes.value.nodeValue,

        }, this.console)


    }
    deleteProductHandler = (id) => {
        const ogProductList = this.state.userProducts;
        ogProductList.splice(id, 1);
        const updatedProductList = ogProductList;
        this.setState({
            userProducts: updatedProductList
        })
        // console.log(this.state.userProducts);
    }

    render() {
        return (
            <div className='CheckOutPageDiv'>
                <div>
                    <h1>User Products</h1>
                    <br />
                    <p>Results per page</p>
                    <button onClick={this.limit} value={15}>15</button><button onClick={this.limit} value={30}>30</button>
                </div>
                {/* {console.log('HELLO', this.state.userProducts)} */}
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
                            Name: {card.productName}
                        </div>
                        <FlatButton label='Remove'
                            onClick={() => this.deleteProductHandler(id)} />
                    </Paper>
                ))}



                <div className='pages'>
                    <button onClick={this.pages} name='1' value={0} >1</button><button onClick={this.pages} name='2' value={15} >2</button> <button onClick={this.pages} name='3' value={30} >3</button> <button onClick={this.pages} value={45} >4</button> <button onClick={this.pages} value={60} >5</button>

                </div>
                <div className='AddProductDiv'>
                    <Link to={`/sell_product/${this.state.userId}`}><FlatButton style={{ backgroundColor: 'blue' }} label='Add Product' /></Link>
                </div>

            </div>
        )
    }
}


export default userProducts;
import React, { Component } from 'react';
import products from '../../Data/products-api'
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import './UserProducts.css';
import { Link } from 'react-router-dom';




class userProducts extends Component {

    state = {
        userProducts: []

    }

    componentDidMount = () => {

        console.log('this is my test')

        console.log(this.props)
        products.userProfile(this.props.match.params.id).then(dataPoints => {
            console.log(dataPoints)
        this.setState({
            userProducts: dataPoints.data
        })
                       
        });
        const s3bucket = `https://s3-us-west-1.amazonaws.com/techcheckbucket/${this.state.userUploadImage1}`
        const s3bucket2 = `https://s3-us-west-1.amazonaws.com/techcheckbucket/${this.state.userUploadImage2}`
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
                    <Link to='/sell_product'><FlatButton style={{ backgroundColor: 'blue' }} label='Add Product' /></Link>
                </div>

            </div>
        )
    }
}


export default userProducts;
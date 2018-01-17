import React, { Component } from 'react';
import products from '../Data/products-api'
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import './UserProducts.css';




class userProduct extends Component {

    state = {
        userProducts: {
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
            <div className='CheckOutPageDiv'>
                <div>
                    <h1>User Products</h1>
                </div>
                {this.state.userProducts.map((card, id) => (
                    <Paper
                        zDepth={5}
                        className='ProductPaper'
                        key={card.id}
                    >
                        <div className='ImageDiv'>
                            <img className='ProductImage' src={card.userUploadImage1} alt="image1" />
                        </div>
                        <div className='ProductDescription'>
                            Description: {card.title}
                        </div>
                        <FlatButton label='Remove'
                            onClick={() => this.deleteProductHandler(id)} />
                    </Paper>
                ))}
                <div className='PlaceOrderDiv'>
                    <FlatButton style={{ backgroundColor: 'blue' }} label='Place Order' />
                </div>

            </div>
        )
    }
}


export default productDetail;
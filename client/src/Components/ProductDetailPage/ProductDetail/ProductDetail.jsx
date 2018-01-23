import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { GridList, GridTile } from 'material-ui/GridList';
import { List, ListItem } from 'material-ui/List';
import { BrowserRouter, Link, NavLink, Switch } from 'react-router-dom';
import products1 from '../../Data/products-api'
import { Row, Col, Container } from 'react-grid-system';
import Divider from 'material-ui/Divider';


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
            createdAt: "",
           
        }
    }
    
    componentDidMount = () => {
        console.log('product detail')
        console.log(this.props);
        products1.Product(this.props.match.params.id).then(data => {
            console.log(data)
            const photosImg = {
                img1: data.data.userUploadImage1,
                
            }

            const imgs = [
                photosImg,
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
            <div>
                <br/>
                <Container>
                    <Paper>
                        <Row>
                            <Col sm={6}>
                                <GridList
                                cellHeight={300}
                                cols={1}
                                padding={5}
                                >
                                {/* {console.log(this.state.photos)} */}
                                    {this.state.photos.map((tile) => (
                                    <GridTile
                                        key={tile.img}
                                    >
                                        <div style={{margin: '10px', width: '430px', height: '270px', maxHeight: '100%', maxWidth: '93%'}}>
                                            <img src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${tile.img1}`} alt='productimage' style={{height: '100%', width: '100%', border: '1px solid red'}} />
                                        </div>
                                    </GridTile>
                                ))}
                                </GridList>
                            </Col>
                            <Col sm={6} >
                                <div style={{ margin: 'auto 30px auto 10px', maxWidth: '100%', maxHeight: '100%', height: '95%'}}>
                                <h3 style={{textAlign: 'center'}}>{this.state.productName}</h3>
                                <Divider/>
                                <p style={{textAlign: 'left'}}>Product Description : {this.state.productDescription}</p>
                                </div>
                            </Col>
                       
                        </Row>
                    </Paper>
                    <Paper >
                        <Row style={{margin: '10px 0px'}}>
                            <Col sm={6}>                 
                                <List>
                                    <ListItem>Price :${this.state.price} </ListItem>
                                    <ListItem>Category : </ListItem>
                                    <ListItem>Condition : {this.state.condition}</ListItem>
                                    <ListItem>Warranty : {this.state.warranty}</ListItem>
                                </List>                   
                            </Col>
                            <Col sm={6}>
                                <List>
                                    <ListItem>Packaging : {this.state.packaging}</ListItem>
                                    <ListItem>Serial Number : {this.state.serialNumber}</ListItem>
                                    <ListItem>Verified : </ListItem>
                                    <ListItem>Product Status : {this.state.status}</ListItem>
                                </List>                     
                            </Col>                       
                        </Row>
                        <div style={{ marginBottom: '60px', padding: '40px', }}>
                            <FlatButton
                                label='Add to Cart'
                                primary={true}
                                style={{width: '30%', backgroundColor: 'white' }}
                                onClick={() => this.props.onClick(this.state.price,  this.state)} />
                        </div>
                    </Paper>
                </Container>
            </div>
        );
    }
}

export default productDetail;
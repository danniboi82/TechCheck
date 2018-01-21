import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import './CheckOutPage.css';
import Paper from 'material-ui/Paper'
import PayPalButton from './PayPalButton/PayPalButton';
import { Row, Col } from 'react-grid-system';
import Divider from 'material-ui/Divider';



class checkOutPage extends Component {
    state = {
        dummyData: [
            {
                img: 'https://cdn.mos.cms.futurecdn.net/QSjwpofL4v2VgLvWaJWAhH.jpg',
                title: 'Video Card',
                author: '$10~500',
                id: '0',
            },
            {
                img: 'https://a1.amlimg.com/MjJjODViYzNjMDFhYWFmODc2MmQzMjg5ZWQ0MDkyZGFivKkjqS15m5jyjDw7G-15aHR0cDovL21lZGlhLmFkc2ltZy5jb20vNTM4OWY0NzA0NjE1NzI2YTBjOGNjMmVmN2I3OTZkZWQ3NzMwYTJhYWVkOTgwYTI3YmRiNmM0NjY4NGNhOWJiZS5qcGd8fHx8fHw3MDB4NDYyfGh0dHA6Ly93d3cuYWR2ZXJ0cy5pZS9zdGF0aWMvaS93YXRlcm1hcmsucG5nfHx8.jpg',
                title: 'Mother Boards',
                author: '$10~200',
                id: '1',
            },
            {
                img: 'https://images.techhive.com/images/article/2013/06/e3_2013_pc_gaming_slideshow_15_amd_rig-100041976-orig.jpg',
                title: 'Desktops',
                author: '$150~2000',
                id: '2',
            },
            {
                img: 'http://hexus.net/media/uploaded/2016/1/02ad96e3-9802-47cf-bb97-93e4e7185e16.png',
                title: 'Peripherals',
                author: '$5~300',
                id: '3',
            },
            {
                img: 'http://img.hexus.net/v2/qotw/gamingmice.jpg',
                title: 'Gaming Mouse',
                author: '$5~50',
                id: '4',
            },
            {
                img: 'http://www.corsair.com/~/media/02C9A29302A447B89AF4BEBD0D3638BE.ashx?w=700',
                title: 'Full Systems',
                author: '$200~3500',
                id: '5',
            },
            {
                img: 'https://venturebeat.com/wp-content/uploads/2017/06/omen_17_coreset_rearquarter.jpg?fit=578%2C491&strip=all',
                title: 'Laptops',
                author: '$200~4000',
                id: '6',
            },
            {
                img: 'https://i.pinimg.com/736x/97/9b/ec/979beca61b0a01017aeabb94d6ddf5e5--console-gaming.jpg',
                title: 'Game Consoles',
                author: '$25~400',
                id: '7',
            },
        ],
    }

    deleteProductHandler = (id) => {
        const ogProductList = this.state.dummyData;
        ogProductList.splice(id, 1);
        const updatedProductList = ogProductList;
        this.setState({
            dummyData: updatedProductList
        })
        console.log(this.state.dummyData);
    }


    render() {

        console.log(this.props.cartamount)
        return (
            <div className='CheckOutPageDiv'>
                <div >
                    <h1 style={{ backgroundColor: '#005960', margin: '0px auto', padding: '25px 0', borderTop: '1px solid white', color: 'white' }}>CHECKOUT</h1>
                </div>
                {this.state.dummyData.map((card, id) => (
                    <Paper
                        zDepth={5}
                        className='ProductPaper'
                        key={card.id}
                    >
                        <div className='ImageSection'>
                            <img className='ProductPic' src={card.img} alt="" />
                        </div>
                        <div className='DescribeProduct'>
                            Description: {card.title}
                            <Divider style={{ margin: '15px 0' }} />
                            Price : {card.author}
                            <Divider style={{ margin: '15px 0' }} />
                        </div>
                        <FlatButton
                            label='Remove'
                            onClick={() => this.deleteProductHandler(id)}
                            style={
                                {
                                    backgroundColor: '#DC4C46',
                                    position: 'relative',
                                    bottom: '-13%',
                                    right: '0px',
                                    marginRight: '15px'
                                }
                            }
                        />
                    </Paper>
                ))}

                <Paper zDepth={5}
                    className='PlaceOrderDiv'>
                    <Row>
                        <Col sm={6} style={{ textAlign: 'left', paddingLeft: '155px' }}>
                            Total Amount :
                        </Col>
                        <Col sm={6}>
                            <PayPalButton style={{ padding: '15px' }} cartamount={this.props.cartamount} />
                        </Col>
                    </Row>
                    {/* <FlatButton style={{ backgroundColor: 'blue', margin: '25px' }} label='Place Order' /> */}
                </Paper>

            </div>
        )
    }
}

export default checkOutPage;
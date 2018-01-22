import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import logo from '../../../ic_shopping_cart_black_24px.svg';
import { Link } from 'react-router-dom';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { Row, Col } from 'react-grid-system';
import Avatar from 'material-ui/Avatar/Avatar';


const style = {
    textAlign: 'center',
    marginTop: '20px',
}

class CartModal extends Component {
    state = {
        open: false,
    };
    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };


    handleCheckOut = () => {
        if (this.props.cartitem === 0) {
            alert('Nothing to check out!');
            this.setState({ open: true });
        } else {
            this.setState({ open: false });
        }
    };

    static muiName = 'FlatButton';

    handleDelete = (k) => {

        let newcartarray = this.state.cartarray.slice();
        let cartitemindex = newcartarray.indexOf(k);
        let cartamount = this.state.cartAmount - k.author;
        newcartarray.splice(cartitemindex, 1);
        let cartitem = this.state.cartItem - 1;

        this.setState({ cartarray: newcartarray, cartItem: cartitem, cartAmount: cartamount });
    };

    render() {

        const items = this.props.cartarray.map(step => {
            return (
                <MenuItem style={{ fontSize: '10px', textAlign: 'center' }}>
                    <Row>
                        <Col sm={4}>
                        <Avatar src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${step.photos[0].img1}`}/>
                    
                        </Col>
                        <Col sm={4}>
                            Price: {step.price} 
                        </Col>
                        <Col sm={4} onClick={() => this.props.onDelete(step.price,  this.state)} > 
                            X
                        </Col> 
                    </Row>
                </MenuItem>
            );
        });

        const actions = [

            <Link to='check_out'>
                <FlatButton
                    label="Check Out"
                    primary={true}
                    keyboardFocused={true}     
                />
            </Link>,
        ];

        return (
            <div>
                <div>
                    <FlatButton {...this.props} title='cart' style={style} onClick={this.handleClick} >
                        <img src={logo} alt="shopping cart" /> <span style={{ position: 'relative', bottom: '11px', left: '-20.5px', color: 'white' }}> {this.props.cartitem}</span>
                    </FlatButton>
                </div>
                <Row >
                    <Col sm={12} >
                    <div>
                    <Popover
                        actions={actions}
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                        onRequestClose={this.handleRequestClose}
                        animation={PopoverAnimationVertical}
                        style={{width: '50%'}}
                    >
                        <Menu>
                            <Row>
                                <Col sm={6}>
                                <div style={{ textAlign: 'center', borderRight: '1px solid grey'}}>
                                <img src={logo} alt="shopping cart" style={{ position: 'relative', top: '1px', left: '3px' }} />  
                                <span style={{ position: 'relative', bottom: '12px', left: '-19px', color: 'white' }}> {this.props.cartitem}</span> 
                                </div>

                                </Col>
                                <Col sm={6}>
                                <div style={{ textAlign: 'center' }}>
                                Amount : ${this.props.cartamount}
                                </div>
                                </Col>
                            </Row> 
                            <Divider />
                            <div className='BoughtProducts'>
                                {items}
                            </div>
                        </Menu>
                        <div style={{ textAlign: 'center', padding: '10px 0', }}>
                            <Link to='/check_out'> <FlatButton style={{ backgroundColor: '#92B558' }} onClick={this.handleCheckOut}>Check Out</FlatButton></Link>
                        </div>
                    </Popover>
                </div>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default CartModal;
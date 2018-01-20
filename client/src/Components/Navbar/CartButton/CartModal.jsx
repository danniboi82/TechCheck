import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import logo from '../../../ic_shopping_cart_black_24px.svg';
import { Link } from 'react-router-dom';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';


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
                <MenuItem>
                   {step.productName}... Price: {step.price}
                </MenuItem>
            );
        });

        const actions = [
            
            <Link to='check_out'><FlatButton
                label="Check Out"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleCheckOut}
            /></Link>,
        ];

        return (
            <div>
                <div>
                    <FlatButton {...this.props} title='cart' style={style} onClick={this.handleClick} >
                        <img src={logo} alt="shopping cart" /> <span style={{ position: 'relative', bottom: '11px', left: '-22px', color: 'white' }}> {this.props.cartitem}</span>
                    </FlatButton>
                </div>
                <div>
                    <Popover
                        actions={actions}
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                        onRequestClose={this.handleRequestClose}
                        animation={PopoverAnimationVertical}
                    >
                        <Menu>
                            <div style={{ textAlign: 'center' }}>
                            Item Count :   {this.props.cartitem}  |
                            Amount : {this.props.cartamount}
                            </div>
                            <div className='BoughtProducts'>
                                {items}
                            </div>
                        </Menu>
                        <div style={{ textAlign: 'center', padding: '10px 0', }}>
                          <Link to='/check_out'> <FlatButton style={{ backgroundColor: '#92B558' }}>Check Out</FlatButton></Link>
                        </div>
                    </Popover>
                    {/* <Dialog
                        title="Cart"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        Item Count :   
                        <br />
                        Item Total Amount :  {this.props.cartamount}
                        <br />
                        <hr />
                        <ol>
                            {items}
                        </ol>
                        <hr />

                    </Dialog> */}

                </div>
            </div>

        );
    }
}

export default CartModal;
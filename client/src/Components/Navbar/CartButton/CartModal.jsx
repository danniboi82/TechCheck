import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import logo from '../../../ic_shopping_cart_black_24px.svg';
import {Link} from 'react-router-dom';

const style = {
    textAlign: 'center',
    marginTop: '20px',
}

class CartModal extends Component {
    state = {
        showCartModalDialogue: false,
        open: false

    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
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

        const items = this.props.cartarray.map((step) => {
            return (
                <li> Item: {step.title} .    . Price: ${step.author}
                </li>
            );

        });



        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleClose}
            />,
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
                    <FlatButton {...this.props} title='cart' style={style} onClick={this.handleOpen} >
                        <img src={logo} alt="shopping cart" /> <span style={{position: 'relative', bottom: '11px', left: '-22px', color: 'white'}}> {this.props.cartitem}</span> 
                    </FlatButton>
                </div>
                <div>
                    <Dialog
                        title="Cart"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        Item Count :   {this.props.cartitem}
                        <br />
                        Item Total Amount :  {this.props.cartamount}
                        <br />
                        <hr />
                        <ol>
                            {items}
                        </ol>
                        <hr />

                    </Dialog>

                </div>
            </div>

        );
    }
}

export default CartModal;
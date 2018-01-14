import React, { Component } from "react";
import Header from './Header/Header';
import Cart from './Cart/Cart';
import MissionStatement from './MissionStatement/MissionStatement';
import ProductGridList from './ProductGridList/ProductGridList';

class mainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cartItem: 0,
            cartAmount: 0,
            cartarray: []
        };
    }

    handleClick = (i, j) => {

        let cartitem = this.state.cartItem + 1;
        let cartamount = this.state.cartAmount + i;
        let newcartarray = this.state.cartarray.concat(j);
        this.setState({ cartItem: cartitem, cartAmount: cartamount, cartarray: newcartarray });
        alert('Item ' + j.title + ' added to shopping cart!')
    };




    handleDelete = (k) => {

        let newcartarray = this.state.cartarray.slice();
        let cartitemindex = newcartarray.indexOf(k);
        let cartamount = this.state.cartAmount - k.author;

        newcartarray.splice(cartitemindex, 1);
        let cartitem = this.state.cartItem - 1;

        this.setState({ cartarray: newcartarray, cartItem: cartitem, cartAmount: cartamount });
    };


    render() {
        // const handleClick = (i, j) => { this.props.onClick();}
        //alert(this.props.cartitem);
        //alert(this.props.onClick);
        //const mainCartClick = () =>this.props.onClick();

        return (
            <div>
                <Cart cartitem={this.state.cartItem} cartamount={this.state.cartAmount}
                    cartarray={this.state.cartarray} onClick={this.handleDelete} > </Cart>
                <Header onClick={this.handleClick} />
                <MissionStatement />
                <ProductGridList onClick={this.handleClick} dummyData={this.dummyData} />
            </div>
        );
    }
}

export default mainPage;
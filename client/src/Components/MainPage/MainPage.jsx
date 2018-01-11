import React, { Component } from "react";
import Header from './Header/Header';
import Cart from './Cart/Cart';
import MissionStatement from './MissionStatement/MissionStatement';
import ProductGridList from './ProductGridList/ProductGridList';
// import MyForm from './Register/RegisterUser';
import { Route } from 'react-router-dom';

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
          alert ('Item '+j+' added to shopping cart!')
        let cartitem = this.state.cartItem+1;
        let cartamount = this.state.cartAmount+i;
        let newcartarray=this.state.cartarray.concat(j);
        this.setState({cartItem: cartitem, cartAmount: cartamount, cartarray: newcartarray});
        
      };

      handleDelete = (k) => {  
        alert ('Item is deleted from cart');
      let newcartarray=this.state.cartarray.slice();
      let cartitemindex = newcartarray.indexOf(k);
      newcartarray.splice(cartitemindex, 1);
      let cartitem = this.state.cartItem-1;
      this.setState({cartarray: newcartarray,cartItem: cartitem});
    };


render(){
   
    return (
        <div>
        
            <Cart cartItem={this.state.cartItem} cartAmount={this.state.cartAmount} cartarray={this.state.cartarray}
            onClick={this.handleDelete}/>
            <Header onClick={this.handleClick}/>

            <MissionStatement />

            <ProductGridList onClick={this.handleClick} dummyData={this.dummyData}
/>

        </div>
    );
}}

export default mainPage;
import React, { Component } from "react";
import Header from './Header/Header';
import Cart from './Cart/Cart';
import MissionStatement from './MissionStatement/MissionStatement';
import ProductGridList from './ProductGridList/ProductGridList';
// import MyForm from './Register/RegisterUser';
import { Route } from 'react-router-dom';

class mainPage extends Component { 
/*
      constructor(props) {
        super(props);

        this.state = {
            cartItem: 0,
            cartAmount: 0,
            cartarray: []
          };

      }
      */
     


render(){
   
    return (
        <div>
 
            <Header  />

            <MissionStatement />

            <ProductGridList onClick={this.props.onClick} dummyData={this.dummyData}
/>

        </div>
    );
}}

export default mainPage;
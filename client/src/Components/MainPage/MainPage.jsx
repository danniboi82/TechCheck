import React, { Component } from "react";
import Header from './Header/Header';
import Cart from './Cart/Cart';
import MissionStatement from './MissionStatement/MissionStatement';
import ProductGridList from './ProductGridList/ProductGridList';

class mainPage extends Component { 

     

render(){

        return (
            <div>              
                <Header  />
                <MissionStatement />
                <ProductGridList  dummyData={this.dummyData} />
            </div>
        );
    }
}

export default mainPage;
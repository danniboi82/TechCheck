import React, { Component } from "react";
import Header from './Header/Header';
import ProductGridList from './ProductGridList/ProductGridList';
import MissionTabs from './MissionTabs/MissionTabs';

class mainPage extends Component { 

     

render(){

        return (
            <div >              
                <Header  />
                <MissionTabs style={{marginLeft: 'auto',
        marginRight: 'auto'}} />
                <ProductGridList  dummyData={this.dummyData} />
            </div>
        );
    }
}

export default mainPage;
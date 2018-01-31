import React, { Component } from "react";
import Header from './Header/Header';
import ProductGridList from './ProductGridList/ProductGridList';
import MissionTabs from './MissionTabs/MissionTabs';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from './Header/mobiletear/mobiletearsheet'
import Divider from 'material-ui/Divider';
class mainPage extends Component { 

     

render(){

        return (
            <div>
            {/* <div className='drawer' style={{height:400}}>
          
          <List>
      
          <ListItem primaryText="Categories" />
          <Divider />
            <ListItem primaryText="Graphic Cards" />
      
            <ListItem primaryText="Processors"  />
            <ListItem primaryText="Hard Drives"  />
            <ListItem primaryText="Motherboards"  />
            <ListItem primaryText="RAM"  />
            <ListItem primaryText="Power Supply" />
            <ListItem primaryText="Computer Cases"  />
            <ListItem primaryText="Gaming Peripherals Mice, Keyboards, Headsets"  />
            <ListItem primaryText="Laptops"  />
            <ListItem primaryText="Game Consoles"  />
          </List>
         
         
     
       </div> */}
            <div style={{ border: '1px solid black'}}>    
             
       
 
      
                    
                <Header  />
                <MissionTabs style={{marginLeft: 'auto',
        marginRight: 'auto'}} />
                <ProductGridList  dummyData={this.dummyData} />
            </div>
            </div>    
        );
    }
}

export default mainPage;
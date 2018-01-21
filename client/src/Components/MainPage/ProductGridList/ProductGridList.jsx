import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './ProductGridList.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  subheader: {
    fontSize: '50px',
    color: 'black', 
    padding: '50px 0',
    backgroundColor: 'red'
  }
};

const dummyData = [
  { id: '1',
    img: 'https://cdn.mos.cms.futurecdn.net/QSjwpofL4v2VgLvWaJWAhH.jpg',
    title: 'Video Cards',
    value:'Graphic Card',
    author: 500,
  },
  { id: '2',
    img: 'https://a1.amlimg.com/MjJjODViYzNjMDFhYWFmODc2MmQzMjg5ZWQ0MDkyZGFivKkjqS15m5jyjDw7G-15aHR0cDovL21lZGlhLmFkc2ltZy5jb20vNTM4OWY0NzA0NjE1NzI2YTBjOGNjMmVmN2I3OTZkZWQ3NzMwYTJhYWVkOTgwYTI3YmRiNmM0NjY4NGNhOWJiZS5qcGd8fHx8fHw3MDB4NDYyfGh0dHA6Ly93d3cuYWR2ZXJ0cy5pZS9zdGF0aWMvaS93YXRlcm1hcmsucG5nfHx8.jpg',
    title: 'Mother Boards',
    value:'MotherBoard',
    author: 200,
  },
  { id: '3',
    img: 'https://images.techhive.com/images/article/2013/06/e3_2013_pc_gaming_slideshow_15_amd_rig-100041976-orig.jpg',
    title: 'Desktops',
    value:'Desktop',
    author: 1000,
  },
  {id: '4',
    img: 'http://hexus.net/media/uploaded/2016/1/02ad96e3-9802-47cf-bb97-93e4e7185e16.png',
    title: 'Peripherals',
    value:'Peripheral',
    author: 200,
  },
  {id: '5',
    img: 'http://img.hexus.net/v2/qotw/gamingmice.jpg',
    title: 'Gaming Mouse',
    value:'GamingMouse',
    author: 50,
  },
  {id: '6',
    img: 'http://www.corsair.com/~/media/02C9A29302A447B89AF4BEBD0D3638BE.ashx?w=700',
    title: 'Full Systems',
    value:'FullSystem',
    author: 500,
  },
  {id: '7',
    img: 'https://venturebeat.com/wp-content/uploads/2017/06/omen_17_coreset_rearquarter.jpg?fit=578%2C491&strip=all',
    title: 'Laptops',
    value:'Laptop',
    author: 1000,
  },
  {id: '8',
    img: 'https://i.pinimg.com/736x/97/9b/ec/979beca61b0a01017aeabb94d6ddf5e5--console-gaming.jpg',
    title: 'Game Consoles',
    value:'GameConsole',
    author: 400,
  },
];

//   <img src={tile.img} onClick={() => props.onClick(tile.author, tile)} />
/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */

 
   
class productGridList extends Component {
  constructor(props){
    super(props)
    this.state={
category:''

    }
    // this.searchCat = this.searchCat.bind(this);
  }
  search=()=>{
    console.log(this.state.category)
     window.location=`/search_results/${this.state.category}`
  }
  searchCat=(event)=>{
    let cat=event.currentTarget.attributes.value.nodeValue

    // const { target: { value } } = event;
this.setState({
 category:cat
},this.search)
  




  }
  render() {

    return (
      
 
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader style={styles.subheader}>Popular Items</Subheader>
      {dummyData.map((tile) => (
        <GridTile
        name={tile.title}
          key={tile.img}
          value={tile.value}
          onClick={this.searchCat }
         
          title={tile.title + ' ...Click  image to search by category!'}
          subtitle={<span>Price Range<b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>
          }
          > 
        <img src={tile.img}  value={tile.title}alt='categorys'/>
        </GridTile>
      ))}
    </GridList>
  </div>
    )
  }
    };

export default productGridList;

import React,{Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import productsApi from '../../Data/products-api'
import axios from "axios";
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  gridList: {
    width: '90%',
    height: '100%',
    overflowY: 'auto',
  },
  subheader: {
    fontSize: '50px',
    color: 'black', 
    padding: '50px 0',
    backgroundColor: 'red',
    textAlign: 'center'
  }
};

const dummyData = [
  {
    img: 'https://cdn.mos.cms.futurecdn.net/QSjwpofL4v2VgLvWaJWAhH.jpg',
    title: 'Video Card',
    author: '$10~500',
  },
  {
    img: 'https://a1.amlimg.com/MjJjODViYzNjMDFhYWFmODc2MmQzMjg5ZWQ0MDkyZGFivKkjqS15m5jyjDw7G-15aHR0cDovL21lZGlhLmFkc2ltZy5jb20vNTM4OWY0NzA0NjE1NzI2YTBjOGNjMmVmN2I3OTZkZWQ3NzMwYTJhYWVkOTgwYTI3YmRiNmM0NjY4NGNhOWJiZS5qcGd8fHx8fHw3MDB4NDYyfGh0dHA6Ly93d3cuYWR2ZXJ0cy5pZS9zdGF0aWMvaS93YXRlcm1hcmsucG5nfHx8.jpg',
    title: 'Mother Boards',
    author: '$10~200',
  },
  {
    img: 'https://images.techhive.com/images/article/2013/06/e3_2013_pc_gaming_slideshow_15_amd_rig-100041976-orig.jpg',
    title: 'Desktops',
    author: '$150~2000',
  },
  {
    img: 'http://hexus.net/media/uploaded/2016/1/02ad96e3-9802-47cf-bb97-93e4e7185e16.png',
    title: 'Peripherals',
    author: '$5~300',
  },
  {
    img: 'http://img.hexus.net/v2/qotw/gamingmice.jpg',
    title: 'Gaming Mouse',
    author: '$5~50',
  },
  {
    img: 'http://www.corsair.com/~/media/02C9A29302A447B89AF4BEBD0D3638BE.ashx?w=700',
    title: 'Full Systems',
    author: '$200~3500',
  },
  {
    img: 'https://venturebeat.com/wp-content/uploads/2017/06/omen_17_coreset_rearquarter.jpg?fit=578%2C491&strip=all',
    title: 'Laptops',
    author: '$200~4000',
  },
  {
    img: 'https://i.pinimg.com/736x/97/9b/ec/979beca61b0a01017aeabb94d6ddf5e5--console-gaming.jpg',
    title: 'Game Consoles',
    author: '$25~400',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class ProductSearch extends Component{
  state={
    products:[],
    pages:0,
    limit:0
  }
  componentDidMount=()=>{
    console.log(this.props.match.params.category)
    axios({
      method:'post',
     url: `/api/products/category`,
     data:{
      category:this.props.match.params.category,
      page:0,
      limit:15

     }
  })
.then(products=>{
  console.log(products)
  this.setState({
    products: products.data,
    
})
})
}
    // userId:this.props.match.params.id,
           
    // productsApi.catagorySearch(this.props.match.params.category)
  console=()=>{
    console.log( this.state.limit)
     axios({
         method:'post',
        url: `/api/products/category`,
        data:{
            userId:this.props.match.params.category,
            page:this.state.page,
            limit:this.state.limit

        }
     }).then(next=>{
console.log(next)
this.setState({
 userProducts: next.data
})
     })
}
limit=(e)=>{

console.log(e.currentTarget.attributes.value.nodeValue)
    this.setState({
        
        limit:e.currentTarget.attributes.value.nodeValue
    },this.console)
  
    
}
pages=(e)=>{


this.setState({
    page:e.currentTarget.attributes.value.nodeValue,
 
},this.console)


}
  render(){

  return (
  <div style={styles.root}>
   <Subheader style={styles.subheader}>Search Results</Subheader>
   <p>Results per page</p>
                <button onClick={this.limit} value={15}>15</button><button onClick={this.limit}value={30}>30</button>
    <GridList
      cellHeight={180}
      style={styles.gridList}
      cols={4}
      padding={10}
    >
     
      {this.state.products.map((tile) => (
        <GridTile
          key={tile.id}
          title={tile.productName}
          price={tile.price
          }
          subtitle={<span>Price Range<b>{tile.price}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.userUploadImage1} alt='Searched Products'/>
        </GridTile>
      ))}
        <div className='pages'>
                <button onClick={this.pages} name='1'value={0} >1</button><button onClick={this.pages}name='2' value={15} >2</button> <button onClick={this.pages}name='3' value={30} >3</button> <button onClick={this.pages} value={45} >4</button> <button onClick={this.pages} value={60} >5</button> 
                </div>
    </GridList>
  </div>
  )
}
  }

export default ProductSearch;
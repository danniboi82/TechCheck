import React,{Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import productsApi from '../../Data/products-api'
import axios from "axios";
import FlatButton from 'material-ui/FlatButton';
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



/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class ProductSearch extends Component{
  state={
    products:[],
    pages:0,
    limit:15
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
productDetail=()=>{
  console.log(this.state.productId)
  window.location=`/product_detail/${this.state.productId}`
}
getProductId=(e)=>{
  this.setState({
productId:e.currentTarget.attributes.value.nodeValue
  }, this.productDetail)
 
}
getProductId2=(e)=>{
  this.setState({
productId:e.currentTarget.attributes.value.nodeValue
  },this.addToCart)
}

addToCart=(e)=>{

  console.log(this.state.productId)
}
    // userId:this.props.match.params.id,
           
    // productsApi.catagorySearch(this.props.match.params.category)
  console=()=>{
    console.log( this.state.page)
     axios({
         method:'post',
        url: `/api/products/category`,
        data:{
            category:this.props.match.params.category,
            page:this.state.page,
            limit:this.state.limit

        }
     }).then(next=>{
console.log(next)
this.setState({
 products: next.data
},console.log(this.state.products))

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
   <p>Results per page:</p>
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
          actionIcon={<button value={tile.id} onClick={this.getProductId2}>add to cart</button >}
        >
      {/* <StarBorder color="white" /> */}
          <img    value={tile.id}
          onClick={this.getProductId} src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${tile.userUploadImage1}`} alt='Searched Products'/>
        </GridTile>
      ))}<br/>
        <div className='pages'>
                <button onClick={this.pages} name='1'value={0} >1</button><button onClick={this.pages}name='2' value={15} >2</button> <button onClick={this.pages}name='3' value={30} >3</button> <button onClick={this.pages} value={45} >4</button> <button onClick={this.pages} value={60} >5</button> 
                </div>
    </GridList>
  </div>
  )
}
  }

export default ProductSearch;
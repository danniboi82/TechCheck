import React,{Component} from 'react';

import axios from 'axios'
import { GridList, GridTile } from 'material-ui/GridList';

import {
 Table,
 TableBody,
 TableHeader,
 TableHeaderColumn,
 TableRow,
 TableRowColumn,
} from 'material-ui/Table';
const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


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

class Receipt extends Component {

  state={
    products:[],
    orderNum:'',
    totalAmount:0,
    productId:'',
    userId:''


  }
  componentDidMount=()=>{
  
    
 
    
 
   
this.setState({
  userId:sessionStorage.getItem('iduser'),
  orderNum:this.props.match.params.order,
  totalAmount:localStorage.getItem('total'),
  products:JSON.parse(localStorage.getItem('cartarray'))

},this.email)
    
localStorage.clear()
      //  localStorage.removeItem('cartitem')
      //  localStorage.removeItem('cartarray')
      
 
    console.log(this.props)
  }
  email=()=>{
    axios({

      method:'post',
      url:'/api/purchases/email',
      data:{
        userId:this.state.userId,
        orderNum1:this.state.orderNum,
        products1:this.state.products
       
      }
   

    }).then(data=>{
      console.log(data)
 
     })
    
  }
  getProductId2=(e)=>{
    this.setState({
  productId:e.currentTarget.attributes.value.nodeValue
    },this.showProduct)
  }
  showProduct=()=>{

    window.open(`/product_detail/${this.state.productId}`
      ,
      '_blank' // <- This is what makes it open in a new window.
    );
   
  }
  render() {
    
   
 
    
    
    return (
      <div>
    <h1> Purchase Confirmation </h1>
    <p>Thank you for your purchase! Please print this page for your records.</p>
    <p>Check your email for a confirmation of your order.</p>
    <p>Order Number:{this.state.orderNum}</p>
    <p>Order Total: ${this.state.totalAmount}</p>
    <br/>
    <p>You ordered the items below:</p>

{this.state.products.map((tile) => (
<Table style={{color: '#000000', backgroundColor: '#E0E0E0'}}>
    <TableHeader>
      <TableRow>
  
        <TableHeaderColumn>Product Picture</TableHeaderColumn>
        <TableHeaderColumn>Product Name</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow key={tile.id}>
     
      <TableRowColumn ><div style ={{height:'150px', width:'150px', maxHeight:'100%', maxWidth:'100%'}}><img value={tile.id} src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${tile.photos[0].img1}`} style={{width: '100%', height: '100%'}}/></div></TableRowColumn>
        <TableRowColumn style={{color: 'black'}}>{tile.productName}</TableRowColumn>
        <TableRowColumn style={{color: 'black'}}>${tile.price}</TableRowColumn>
      </TableRow>
    </TableBody>
   

  </Table>

))};
   
  </div>
    )}}

export default  Receipt;
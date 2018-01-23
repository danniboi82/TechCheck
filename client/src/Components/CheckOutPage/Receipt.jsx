import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import axios from 'axios'
import { GridList, GridTile } from 'material-ui/GridList';
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
    productId:''

  }
  componentDidMount=()=>{
   
    const total=
this.setState({
  orderNum:this.props.match.params.order,
  totalAmount:localStorage.getItem('total')

})


    const tmp = JSON.parse(localStorage.getItem('cartarray'));
    console.log(tmp)

    
    // axios({

    //   method:'post',
    //   url:'/api/purchases',
    //   data:{id:
    //   this.props.match.params.order}

    // }).then(data=>{
    //   console.log(data)
    // })
    console.log(this.props)
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
    const tmp = JSON.parse(localStorage.getItem('cartarray'))
    const userId= sessionStorage.getItem('iduser')
    axios({

      method:'post',
      url:'/api/purchases/email',
      data:{
        userId:userId,
        orderNum:this.state.orderNum
      }
    

    }).then(data=>{
      console.log(data)
      localStorage.removeItem('carAmount')
      localStorage.removeItem('cartitem')
      localStorage.removeItem('cartarray')
      
      localStorage.removeItem('total')
    })
  
   
 
    
    
    return (
  <div>
    <p>Please Check your email for confimation</p>
    <p>Order Number:{this.state.orderNum}</p>
    <p>Order Total:{this.state.totalAmount}</p>
    <GridList
          cellHeight={180}
          style={styles.gridList}
          cols={4}
          padding={10}
        >
{tmp.map((tile) => (
 

  <GridTile
              key={tile.id}
              title={tile.productName}
              price={tile.price}
              style={{maxHeight: '100%', maxWidth: '100%', border: '1px solid grey', fontSize: '10px'}}
              subtitle={<span>Price <b>{tile.price}</b></span>}
              actionIcon={<button value={tile.productId} onClick={this.getProductId2}> see full product details</button>}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img value={tile.id}
          onClick={this.getProductId} src={`https://s3-us-west-1.amazonaws.com/techcheckbucket/${tile.photos[0].img1}`} alt='Searched Products' />
            </GridTile>


))}<br/>

</GridList>

   
  </div>
    )
  }

}

export default  Receipt;
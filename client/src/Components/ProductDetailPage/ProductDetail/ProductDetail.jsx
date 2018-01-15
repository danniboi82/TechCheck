import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { GridList, GridTile } from 'material-ui/GridList';
import { List, ListItem } from 'material-ui/List';
import { BrowserRouter, Link, NavLink, Switch } from 'react-router-dom';

const productDetailStyles = {
    h1: {
        color: 'white',
    },

    purchaseButton: {
        backgroundColor: 'white',
        marginTop: '30px',
        width: "30%",
        height: '50px'
    },

    wrapper: {
        backgroundColor: 'black',
        textAlign: 'center',
    },

    paperWrapper: {
        display: 'inline-block',
        backgroundColor: 'black',
        width: '500px',
        height: '300px',
    },
    grid: {
        div: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },

        gridList: {
            width: '80%',
            height: '80%',
            overflowY: 'auto',
        },

        gridTile: {

        }
    }

};

const dummyData = [
    {
        img: 'https://img.purch.com/o/aHR0cHM6Ly93d3cubGFwdG9wbWFnLmNvbS9pbWFnZXMvdXBsb2Fkcy81MjY2L2cvbWFjYm9vay1haXItMjAxNy0wMDcuanBn',
        title: 'Breakfast',
        author: 100,
    },
    {
        img: 'https://img.purch.com/o/aHR0cHM6Ly93d3cubGFwdG9wbWFnLmNvbS9pbWFnZXMvdXBsb2Fkcy81MjY2L2cvbWFjYm9vay1haXItMjAxNy0wMDEuanBn',
        title: 'Tasty burger',
        author: 200,
    },
    {
        img: 'https://img.purch.com/o/aHR0cHM6Ly93d3cubGFwdG9wbWFnLmNvbS9pbWFnZXMvdXBsb2Fkcy81MjY2L2cvbWFjYm9vay1haXItMjAxNy0wMDIuanBn',
        title: 'burger',
        author: 300,
    },
]

const productDetail = (props) => {
    return (
        <div style={productDetailStyles.wrapper}>
            <h1 style={productDetailStyles.h1}> Product Details </h1>

            <div className='GridListDiv' style={productDetailStyles.grid.div}>
                <GridList
                    cellHeight={300}
                    style={productDetailStyles.grid.gridList}
                    cols={3}
                    padding={5}
                >
                    {dummyData.map((tile) => (
                        <GridTile
                            style={productDetailStyles.grid.gridTile}
                            key={tile.img}
                        >
                            <img src={tile.img} alt='product image' />
                        </GridTile>
                    ))}
                </GridList>


                <div className='PaperDiv'>
                    <Subheader style={{color: 'white', fontSize:'50px', padding: '30px'}}>Details</Subheader>
                    <Paper style={productDetailStyles.paperWrapper}>
                        <List>
                            <ListItem>Price : $1200</ListItem>
                            <ListItem>Price : $1200</ListItem>
                            <ListItem>Price : $1200</ListItem>
                            <ListItem>Price : $1200</ListItem>
                        </List>
                    </Paper>
                    <Paper style={productDetailStyles.paperWrapper}>
                        <List>
                            <ListItem>Price : $1200</ListItem>
                            <ListItem>Price : $1200</ListItem>
                            <ListItem>Price : $1200</ListItem>
                            <ListItem>Price : $1200</ListItem>
                        </List>
                    </Paper>

                </div>
            </div>

             <div style={{ paddingBottom: '60px' }}>
                <Link to='/'><FlatButton style={productDetailStyles.purchaseButton} label='Purchase' primary={true} onClick={() => props.onClick(dummyData[0].author, dummyData[0])}/></Link>
            </div>

        </div>
    );
}

export default productDetail;
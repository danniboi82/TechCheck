import React, { Component } from 'react';
// Import routing components
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MainPage from './Components/MainPage/MainPage';
import Footer from './Components/Footer/Footer';
import SearchedPage from './Components/SearchedPage/SearchedPage';
import ProductDetailPage from './Components/ProductDetailPage/ProductDetailPage';
import verification from './Components/verification/verification';
import CheckOutPage from './Components/CheckOutPage/CheckOutPage';
import RegisterUser from './Components/Register/RegisterUser';
import SellProduct from './Components/Sell/SellProduct';
import userProfile from './Components/userProfile/userProfile';
import {reset, resetPassword, emailSent}from './Components/recover/index'


class App extends Component {
    state = {
        cartItem: 1,
        cartAmount: 1,
        cartarray: []
    };

    handleClick = (i, j) => {
        let cartitem = this.state.cartItem + 1;
        let cartamount = this.state.cartAmount + i;
        let newcartarray = this.state.cartarray.concat(j);
        this.setState({ cartItem: cartitem, cartAmount: cartamount, cartarray: newcartarray });
        alert('Item ' + j.title + ' added to shopping cart!')
    };

    render() {
      
        /*  below is taken out of route for now,,instead just put MainPage comp directly
                <Route exact path = '/'
                component = { MainPage } cartitem={this.state.cartItem} cartamount={this.state.cartAmount}
                cartarray={this.state.cartarray} onClick={this.handleClick} /> 
        */
        return (
            <BrowserRouter>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
                    <div className="App">
                        <Navbar cartitem={this.state.cartItem} cartamount={this.state.cartAmount}
                            cartarray={this.state.cartarray} />
                        <Switch>
                            <Route exact path='/' component={MainPage} />
                            <Route exact path='/api/users/verification/:id' component={verification} />
                            <Route path='/check_out' component={CheckOutPage} />
                            <Route path='/product_detail' component={ProductDetailPage} />
                            <Route path='/search_results' component={SearchedPage} />
                            <Route path='/registration' component={RegisterUser} />
                            <Route path='/sell_product' component={SellProduct} />
                            <Route exact path='/api/users/profile/:id' component={userProfile} />
                            <Route path='/acount/recovery' component={reset}/>
                            <Route path ='/sent' component={emailSent}/>
                            <Route path='/reset/:id' component={resetPassword}/>
                        </Switch>
                        <Footer />
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}


export default App;
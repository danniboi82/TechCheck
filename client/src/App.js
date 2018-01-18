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
import CheckOutPage from './Components/CheckOutPage/CheckOutPage';
import RegisterUser from './Components/Register/RegisterUser';
import SellProduct from './Components/Sell/SellProduct';
import { userProfile, userProducts, verification, reset, resetPassword, emailSent, confirmation } from './Components/usersPages/index'


class App extends Component {
    state = {
        cartItem: 0,
        cartAmount: 0,
        cartarray: []
    };

    handleClick = (i, j) => {
        let cartitem = this.state.cartItem + 1;
        let cartamount = this.state.cartAmount + i;
        let newcartarray = this.state.cartarray.concat(j);
        this.setState({ cartItem: cartitem, cartAmount: cartamount, cartarray: newcartarray });
        alert('Item ' + j.title + ' added to shopping cart!')
    };

    handleDelete = (k) => {
        let newcartarray = this.state.cartarray.slice();
        let cartitemindex = newcartarray.indexOf(k);
        let cartamount = this.state.cartAmount - k.author;

        newcartarray.splice(cartitemindex, 1);
        let cartitem = this.state.cartItem - 1;

        this.setState({ cartarray: newcartarray, cartItem: cartitem, cartAmount: cartamount });
    };


    render() {

        /* below Routed.... components are created to pass down props to routed component */
        const RoutedMainPage = (props) => {
            return (
                <MainPage component={MainPage}
                    cartitem={this.state.cartItem}
                    cartamount={this.state.cartAmount}
                    cartarray={this.state.cartarray}
                    onClick={this.handleClick} {...props }
                />
            );
        }

        const RoutedProductDetailPage = (props) => {
            return (
                <ProductDetailPage
                    component={ProductDetailPage}
                    cartitem={this.state.cartItem}
                    cartamount={this.state.cartAmount}
                    cartarray={this.state.cartarray}
                    onClick={this.handleClick} {...props }
                />
            );
        }
        return (
            <BrowserRouter>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
                    <div className="App" >

                        <Navbar cartitem={this.state.cartItem}
                            cartamount={this.state.cartAmount}
                            cartarray={this.state.cartarray} />

                        <Switch>

                            <Route exact path='/' render={RoutedMainPage} />
                            <Route exact path='/api/users/verification/:id' component={verification} />
                            <Route path='/check_out' component={CheckOutPage} />
                            <Route path='/product_detail' render={RoutedProductDetailPage} />
                            <Route path='/search_results' component={SearchedPage} />
                            <Route path='/registration' component={RegisterUser} />
                            <Route path='/sell_product' component={SellProduct} />
                            <Route exact path='/api/users/profile/:id' component={userProfile} />
                            <Route path='/acount/recovery' component={reset} />
                            <Route path='/sent' component={emailSent} />
                            <Route path='/reset/:id' component={resetPassword} />
                            <Route path='/confirmation/reset' component={confirmation} />
                            <Route path='/user/products/:id' component={userProducts} />
                        </Switch>
                        <Footer />
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>

        );
    }
}


export default App;
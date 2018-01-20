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
//import ProductDetailPage from '../src/Components/ProductDetailPage/ProductDetail/ProductDetail'
import CheckOutPage from './Components/CheckOutPage/CheckOutPage';
import RegisterUser from './Components/Register/RegisterUser';
import SellProduct from './Components/Sell/SellProduct';
import { UserProfile, userProducts, verification, reset, resetPassword, emailSent, confirmation } from './Components/usersPages/index'

import axios from "axios";
class App extends Component {
    state = {
        cartItem: 0,
        cartAmount: 0,
        cartarray: [],
        userDataObj: {},
        theId: '',
        logged: false,
        userInput: '',
        dataSource: ''
    };

    
    componentDidMount = () => {


        if (sessionStorage.auth != null) {
            console.log('auth')

            axios({
                method: 'post',
                url: '/api/users/auth',
                data: {
                    userToken: sessionStorage.getItem('auth')

                },
            }).then(user => {
                if (user != null) {
                    console.log(user)
                    this.setState({
                        logged: true,
                        userDataObj: {
                            profilePic: user.data.profilePic, userId: user.data.id, firstName: user.data.firstName,
                            lastName: user.data.lastName, active: user.data.active, verified: user.data.verified
                        },
                       theId: user.data.id


                    })
                    console.log(this.state.theId);
                } else {
                    console.log('no token')
                }
            })
        }
        else {
            console.log('here auth failed')
        }

    }
    handleLoggedChange = (event, logged) => {
        this.setState({ logged: logged });
    };


    logOutHandler = () => {
        this.setState({ logged: false });
        sessionStorage.removeItem('auth')
    }

    userInputHandlerlogged = (event) => {
        this.setState({ userInput: event.target.value })
    }

    handleClick = (i, j) => {
        let cartitem = this.state.cartItem + 1;
        let cartamount = this.state.cartAmount + i;
        let newcartarray = this.state.cartarray.concat(j);
        this.setState({ cartItem: cartitem, cartAmount: cartamount, cartarray: newcartarray });
        alert('Item ' + j.productName + ' added to shopping cart!')
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
        console.log(this.state.theId);
        let tmpid=this.state.theId;
      
        const RoutedProfilePage = (props) => {
            console.log(tmpid);
         
            return (
                
                <UserProfile theuserid={tmpid} component={UserProfile} {...props}

                />
            )
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

        const RoutedCheckOutPage = (props) => {
            return ( 
                <CheckOutPage
                    component={CheckOutPage}
                    cartitem={this.state.cartItem}
                    cartamount={this.state.cartAmount}
                    cartarray={this.state.cartarray}
                />
            )
        }
        return (
            <BrowserRouter>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
                    <div className="App" >
{console.log(this.state.userId)}
                        <Navbar userdata={this.state.userDataObj}
                            dataSource={this.state.dataSource}
                            userInput={this.state.userInput}
                            loggedInput={this.userInputHandlerlogged}
                            loginFunction={this.handleLoggedChange}
                            logged={this.state.logged}
                            logoutFunction={this.state.logged ? this.logOutHandler : null}
                            cartitem={this.state.cartItem}
                            cartamount={this.state.cartAmount}
                            cartarray={this.state.cartarray} />
                        
                        <Switch>
                            <Route exact path='/' render={RoutedMainPage} />
                            <Route exact path='/api/users/verification/:id' component={verification} />
                            <Route path='/check_out' render={RoutedCheckOutPage} />
                            <Route path='/product_detail/:id' render={RoutedProductDetailPage} />
                            <Route path='/search_results' component={SearchedPage} />
                            <Route path='/registration' component={RegisterUser} />
                            <Route path='/sell_product/:id' component={SellProduct} />
                            <Route path='/profile/:id' render={RoutedProfilePage} />
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
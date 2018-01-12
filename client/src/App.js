import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import { Router, Route } from 'react-router';
import { BrowserRouter, Link, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MainPage from './Components/MainPage/MainPage'
import Footer from './Components/Footer/Footer'
import SearchedPage from './Components/SearchedPage/SearchedPage';
import ProductDetailPage from './Components/ProductDetailPage/ProductDetailPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route path='/product_detail' component={ProductDetailPage} />
              <Route path='/search_results' component={SearchedPage} />
            </Switch>
            <Footer />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}


export default App;

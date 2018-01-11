import React from 'react';
import Header from './Header/Header';
import MissionStatement from './MissionStatement/MissionStatement';
import ProductGridList from './ProductGridList/ProductGridList';
// import MyForm from './Register/RegisterUser';
import { Route } from 'react-router-dom';

const mainPage = () => {
    return (
        <div>
            <Header />
            <MissionStatement />
            <ProductGridList />
          
        </div>
    );
}

export default mainPage;
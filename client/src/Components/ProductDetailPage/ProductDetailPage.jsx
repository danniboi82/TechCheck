import React from 'react';
import ProductDetail from './ProductDetail/ProductDetail';


const productDetailPage = (props) => {
    return (
        <div>
            
            <ProductDetail onClick={props.onClick}/>
        </div>
    );
}

export default productDetailPage;
import React from 'react';
import ProductDetail from './ProductDetail/ProductDetail';


const productDetailPage = (props) => {
    console.log(props);
    return (
        <div style={{border: '1px solid black'}}>
            
            <ProductDetail {...props}/>
        </div>
    );
}

export default productDetailPage;
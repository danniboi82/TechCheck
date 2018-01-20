import React from 'react';
import ProductDetail from './ProductDetail/ProductDetail';


const productDetailPage = (props) => {
    console.log(props);
    return (
        <div>
            
            <ProductDetail {...props}/>
        </div>
    );
}

export default productDetailPage;
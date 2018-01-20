import axios from "axios";
const productsApi={
    userProfile:id => axios.get(`/api/products/user/products/${id}`), 
    Product:id => axios.get(`/api/products/product/${id}`),
    catagorySearch:cat=>axios.get(`/api/products/category/${cat}`)
    
}
export {
    productsApi as default
  };
  
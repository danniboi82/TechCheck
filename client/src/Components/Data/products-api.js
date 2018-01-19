import axios from "axios";
const productsApi={
    userProfile:id => axios.get(`/api/products/user/products/${id}`), 
    Product:id => axios.get(`/api/products/product/${id}`),
    
}
export {
    productsApi as default
  };
  
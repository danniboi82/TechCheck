import axios from "axios";
const productsApi={
    userProfile:id => axios.post(`/api/products/user/products/${id}`), 
    Product:id => axios.post(`/api/products/product/${id}`),
    catagorySearch:cat=>axios.get(`/api/products/category`)
    
}
export {
    productsApi as default
  };
  
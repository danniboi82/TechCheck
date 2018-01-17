import axios from "axios";
const productsApi={
    userProfile:id => axios.get(`/api/products/user/products/${id}`)
}
export {
    productsApi as default
  };
  
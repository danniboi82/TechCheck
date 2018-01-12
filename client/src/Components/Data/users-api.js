import axios from "axios";
const usersApi = {
  getAll: () => axios.get('/api/users').then(results => results.data),
  getById: id => axios.get(`/api/users/${id}`).then(results => results.data),
  create: users => axios.post('/api/users', users).then(results => results.data),
  update: users => axios.put(`/api/users/${users.id}`, users),
  verification: id => axios.put(`/api/users/verification/${id}`),
  signIn:email=>axios.post(`/api/users/signIn`),
  delete: id => axios.delete(`/api/users/${id}`)

};
export {
  usersApi as default
};

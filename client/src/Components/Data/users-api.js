import axios from "axios";

const usersApi = {
  getAll: () => axios.get('/api/users').then(results => results.data),
  getById: id => axios.get(`/api/users/${id}`).then(results => results.data),
  create: users => axios.post('/api/users', users).then(results => results.data),
  update: users => axios.put(`/api/users/${users.id}`, users),
  verification: id => axios.put(`/api/users/verification/${id}`),

  delete: id => axios.delete(`/api/users/${id}`),
  userProfile:id => axios.get(`/api/users/profile/${id}`),
reset:email=> axios.post(`/api/users/recover`,{email}),
signIn:(email,pass)=> axios({
  method: 'post',
  url: '/api/users/signIn',
  data: {
     email:this.state.email,
      pass:this.state.pass,
   
  },
  
})

};
export {
  usersApi as default
};

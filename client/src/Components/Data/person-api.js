import axios from "axios";
const personApi = {
  getAll: () => axios.get('/api/person').then(results => results.data),
  getById: id => axios.get(`/api/person/${id}`).then(results => results.data),
  create: person => axios.post('/api/person', person).then(results => results.data),
  update: person => axios.put(`/api/person/${person.id}`, person),
  delete: id => axios.delete(`/api/person/${id}`)
};
export {
  personApi as default
};

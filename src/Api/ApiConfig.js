import axios from 'axios';

const token=localStorage.getItem("Admin_token");
const api = await axios.create({
//   baseURL: 'http://localhost:5000/',
  baseURL: 'http://localhost:5000/',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export default api;




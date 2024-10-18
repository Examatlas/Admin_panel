import axios from 'axios';

const api = await axios.create({
//   baseURL: 'http://localhost:5000/',
  baseURL: 'http://localhost:5000/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("Admin_token")}`
  }
});

export default api;




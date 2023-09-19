import axios from 'axios';

const api = axios.create({
  baseURL: 'https://knots-javascript-el.vercel.app',
});

export default api;

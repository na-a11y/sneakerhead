import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend URL
});

export const signup = (formData) => API.post('/api/users/signup', formData);
export const login = (formData) => API.post('/api/users/login', formData);

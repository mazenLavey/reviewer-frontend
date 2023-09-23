import axios from 'axios';

export const clientApi = axios.create({
    baseURL: 'https://reviewer-backend-r7pt.onrender.com/api'
    // baseURL: 'http://localhost:4000/api'
});

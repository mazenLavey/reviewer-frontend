import axios from 'axios';

export const clientApi = axios.create({
    baseURL: 'https://reviewer-backend-r7pt.onrender.com/api'
});

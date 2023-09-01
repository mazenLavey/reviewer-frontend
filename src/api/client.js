import axios from 'axios';

export const clientApi = axios.create({
    baseURL: 'http://localhost:4000/api'
});

import axios from 'axios';

export const Books = axios.create({
  baseURL: 'http://176.57.208.162:8000/api/v1/books',
});

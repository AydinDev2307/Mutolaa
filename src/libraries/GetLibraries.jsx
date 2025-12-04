import axios from 'axios';

export const Libraries = axios.create({
  baseURL: 'http://176.57.208.162:8000/api/v1/libraries',
});

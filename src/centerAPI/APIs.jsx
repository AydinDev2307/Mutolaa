import axios from 'axios';
import authStore from '../store/authStore';

export const BooksAPI = axios.create({
  baseURL: 'https://org-ave-jimmy-learners.trycloudflare.com/api/v1',
});
BooksAPI.interceptors.request.use((config) => {
  const { access } = authStore.getState();
  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }
  return config;
});
export const Libraries = axios.create({
  baseURL: 'https://org-ave-jimmy-learners.trycloudflare.com/api/v1',
});

export const LOGIN = axios.create({
  baseURL: 'https://org-ave-jimmy-learners.trycloudflare.com/api/v1',
});

LOGIN.interceptors.request.use((config) => {
  const { access } = authStore.getState();
  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }
  return config;
});

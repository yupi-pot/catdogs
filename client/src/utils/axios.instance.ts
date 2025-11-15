import axios from 'axios';

const baseURL = import.meta.env.PROD 
  ? '/api/animals'  // В продакшене используем относительный путь (nginx проксирует)
  : 'http://localhost:5001/api/animals';  // В разработке

export const $api = axios.create({
   baseURL,
   withCredentials: true
});
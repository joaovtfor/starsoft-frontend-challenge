import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-challenge.starsoft.games/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

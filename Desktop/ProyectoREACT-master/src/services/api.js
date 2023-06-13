import axios from 'axios';

export const APIHeaders = {
  Accept: 'application/json',
  'Content-type': 'application/json',
  Authorization: 'token',
};

export const API = axios.create({
  baseURL: 'http://localhost:8000',
  headers: APIHeaders,
});

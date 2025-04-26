// src/api.js

import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000'; // your backend URL

export const testBackendConnection = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Error connecting to backend:', error);
    throw error;
  }
};

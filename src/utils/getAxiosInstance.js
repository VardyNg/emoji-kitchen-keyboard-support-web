import axios from 'axios';

export default function getAxiosInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
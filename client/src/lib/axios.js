import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
  timeout: 10000,
  // headers: {
  //     'Content-Type': 'application/json',
  // },
});

export { axiosInstance };  // Make sure axiosInstance is being exported like this

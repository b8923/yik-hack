import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_URL,

  headers: {
    "Content-Type": "application/json"
  }
});

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default instance;
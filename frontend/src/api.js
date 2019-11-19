import axios from "axios";
import store from "@/store";

const instance = axios.create({
  baseURL: process.env.VUE_APP_URL,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

instance.interceptors.request.use(
  config => {
    const { position, user } = store.state;
    config.headers.longitude = position.longitude;
    config.headers.latitude = position.latitude;
    config.headers.user = user ? user.id : null;
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default instance;

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
    config.headers["longitude"] = store.state.position.longitude;
    config.headers["latitude"] = store.state.position.latitude;
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default instance;

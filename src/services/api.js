import axios from "axios";

const api = axios.create({
  baseURL: process.ENV.REACT_APP_API_URL,
});

export default api;

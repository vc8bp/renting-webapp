import axios from "axios";


const BASE_URL = "http://localhost:4000";

function getAccessToken() {
  const storage = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null
  const token =  storage ? storage.token : null;
  return token
}


export const AxiosRequest = axios.create({
  baseURL: `${BASE_URL}/api`,
});

AxiosRequest.interceptors.request.use(config => {
  const newToken = getAccessToken();
  if (newToken) {
    config.headers.token = `Bearer ${newToken}`;
  }
  return config;
});

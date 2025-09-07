import axios from "axios";

const BASE_URL ="http://localhost:5000/api";
console.log("API Base URL:", BASE_URL);

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});

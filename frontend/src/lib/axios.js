import axios from "axios";

BASE_URL = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});

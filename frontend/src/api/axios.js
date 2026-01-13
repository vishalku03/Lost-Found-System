

import axios from "axios";

const api = axios.create({
  baseURL: "https://lost-found-site-2y0q.onrender.com", // ✅ ONLY base URL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

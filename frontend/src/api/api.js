import axios from "axios";

const localURL = "http://localhost:5000";
const productionURL = "https://banavo.vercel.app";

const token = localStorage.getItem("canva_token");

const api = axios.create({
  baseURL: productionURL,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
  withCredentials: true,
});
export default api;

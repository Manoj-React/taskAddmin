import axios from "axios";
import { backEndURL } from "../configs/env.js";

const baseURL = backEndURL;
// let headers = {};
// if(localStorage.token){
//   headers.Authorization = `Bearer ${localStorage.token}`;
// }

const axiosInstance = axios.create({
  baseURL: baseURL,
  // headers,
});

export default axiosInstance;

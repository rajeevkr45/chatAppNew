import axios from "axios";
export const baseURL = "http://139.59.13.131:8080";
export const httpClient = axios.create({
  baseURL: baseURL,
});

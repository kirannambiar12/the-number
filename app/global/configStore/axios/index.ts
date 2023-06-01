import axios from "axios";

export const firebaseAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_ENV,
  timeout: 5000,
});

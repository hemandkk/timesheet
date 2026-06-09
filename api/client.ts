import { tokenStorage } from "@/utils/storage";
import { create } from "axios";

export const api = create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await tokenStorage.getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
api.interceptors.request.use((config) => {
  //console.log("REQUEST");
  //console.log(config.method?.toUpperCase());
  //console.log(config.url);
  //console.log(config.data);

  return config;
});

api.interceptors.response.use(
  (response) => {
    //console.log("RESPONSE");
    //console.log(response.status);
    //console.log(response.config.url);
    //console.log(response.data);

    return response;
  },
  (error) => {
    //console.log("API ERROR");
    //console.log(error.response?.status);
    //console.log(error.response?.data);

    return Promise.reject(error);
  },
);

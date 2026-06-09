import { api } from "./client";

type LoginInput = {
  email: string;
  password: string;
};
export const authApi = {
  login(data: LoginInput) {
    return api.post("/auth/login/", data);
  },
};

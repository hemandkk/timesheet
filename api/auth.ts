import { api } from "./client";

type LoginInput = {
  email: string;
  password: string;
};

type ForgotPasswordInput = {
  email: string;
  password: string;
  otp: string;
  confirm_password: string;
  user_id: string;
};

export const authApi = {
  login(data: LoginInput) {
    return api.post("/auth/login/", data);
  },
  forgotPassword(data: Pick<LoginInput, "email">) {
    return api.post("/auth/forgot-password/", data);
  },
  verifyOTP(data: Pick<ForgotPasswordInput, "email" | "otp">) {
    return api.post("/auth/verify-otp/", data);
  },
  resetPassword(data: Omit<ForgotPasswordInput, "otp" | "user_id">) {
    return api.post("/auth/reset-password/", data);
  },
};

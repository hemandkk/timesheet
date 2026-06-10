// utils/tokenStorage.ts
import { User } from "@/store/authStore";
import * as SecureStore from "expo-secure-store";
export const tokenStorage = {
  async setAccessToken(token: string) {
    await SecureStore.setItemAsync("access_token", token);
  },

  async setRefreshToken(token: string) {
    await SecureStore.setItemAsync("refresh_token", token);
  },
  async setUser(user: User) {
    await SecureStore.setItemAsync("user", JSON.stringify(user));
  },
  async getAccessToken() {
    return SecureStore.getItemAsync("access_token");
  },

  async clear() {
    await SecureStore.deleteItemAsync("access_token");
    await SecureStore.deleteItemAsync("refresh_token");
  },
};

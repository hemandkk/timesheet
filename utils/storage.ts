// utils/tokenStorage.ts
import * as SecureStore from "expo-secure-store";

export const tokenStorage = {
  async setAccessToken(token: string) {
    await SecureStore.setItemAsync("access_token", token);
  },

  async setRefreshToken(token: string) {
    await SecureStore.setItemAsync("refresh_token", token);
  },

  async getAccessToken() {
    return SecureStore.getItemAsync("access_token");
  },

  async clear() {
    await SecureStore.deleteItemAsync("access_token");
    await SecureStore.deleteItemAsync("refresh_token");
  },
};

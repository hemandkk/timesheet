// hooks/useAuthBootstrap.ts

import { useAuthStore } from "@/store/authStore";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

export function useAuthBootstrap() {
  const [isReady, setIsReady] = useState(false);
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    async function init() {
      try {
        const userJson = await SecureStore.getItemAsync("user");

        if (userJson) {
          setUser(JSON.parse(userJson));
        }
      } finally {
        setIsReady(true);
      }
    }

    init();
  }, []);

  return isReady;
}

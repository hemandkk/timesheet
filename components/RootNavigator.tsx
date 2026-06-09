// components/RootNavigator.tsx

import { useAuthBootstrap } from "@/hooks/useAuthBootstrap";
import { useAuthStore } from "@/store/authStore";
import { Redirect, Stack } from "expo-router";

export default function RootNavigator() {
  const ready = useAuthBootstrap();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!ready) {
    return null;
  }

  if (isAuthenticated) {
    return <Redirect href="/" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

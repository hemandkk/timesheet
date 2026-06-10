// components/RootNavigator.tsx

import { useAuthBootstrap } from "@/hooks/useAuthBootstrap";
import { Stack } from "expo-router";

export default function RootNavigator() {
  const ready = useAuthBootstrap();
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // console.log("isAuthenticated ROOT NAV", isAuthenticated);
  console.log("ready ROOT NAV", ready);
  if (!ready) {
    return null;
  }

  /*   if (isAuthenticated) {
    return <Redirect href="/(root)/(tabs)" />;
  } */

  return <Stack screenOptions={{ headerShown: false }} />;
}

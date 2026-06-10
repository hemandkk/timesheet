//app\(root)\_layout.tsx
import { useAuthStore } from "@/store/authStore";
import { Redirect, Slot } from "expo-router";
export default function RootLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  console.log("ROOT AUTH:", isAuthenticated);
  if (!isAuthenticated) return <Redirect href="/(auth)/signIn" />;

  return <Slot />;
}

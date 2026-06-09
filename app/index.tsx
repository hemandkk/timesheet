import { useAuthStore } from "@/store/authStore";
import { Redirect } from "expo-router";
import "../global.css";
export default function Index() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) return <Redirect href="/(root)/(tabs)" />;

  return <Redirect href="/(auth)/signIn" />;
}

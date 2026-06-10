//app\(root)\(tabs)\index.tsx

import AdminHome from "@/components/AdminHome";
import UserHome from "@/components/UserHome";
import { useAuthStore } from "@/store/authStore";

export default function HomePage() {
  const role = useAuthStore((state) => state.user?.role);

  return role === "Admin" ? <AdminHome /> : <UserHome />;
}

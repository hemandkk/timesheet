import { usersApi } from "@/api/users";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await usersApi.getAll();
      return res.data;
    },
  });
}
export function useAttendanceRequest() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await usersApi.getAttendanceRequests();
      return res.data;
    },
  });
}

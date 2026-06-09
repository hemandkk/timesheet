import { authApi } from "@/api/auth";
import { useAuthStore } from "@/store/authStore";
import { tokenStorage } from "@/utils/storage";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: authApi.login,

    onSuccess: async (res) => {
      console.log("LOGIN SUCCESS");
      const data = res.data;
      await tokenStorage.setAccessToken(data.access);
      await tokenStorage.setRefreshToken(data.refresh);

      setUser({
        id: data.id,
        username: data.username,
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        role: data.role,
        avatar: data.avatar,
        timezone: data.timezone,
        essl_id: data.essl_id,
        assignee_id: data.assignee_id,
        expected_daily_hours: data.expected_daily_hours,
        groups: data.groups,
        is_active: data.is_active,
      });
      console.log("AUTH STATE", useAuthStore.getState());
    },
    onError: (error: any) => {
      //console.log("LOGIN ERROR");
      //console.log(error?.response?.status);
    },
  });
}

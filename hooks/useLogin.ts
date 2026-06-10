import { authApi } from "@/api/auth";
import { useAuthStore } from "@/store/authStore";
import { tokenStorage } from "@/utils/storage";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: authApi.login,

    onSuccess: async (res) => {
      //console.log("LOGIN SUCCESS");
      const data = res.data;
      await tokenStorage.setAccessToken(data.access);
      await tokenStorage.setRefreshToken(data.refresh);

      const user = {
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
      };
      setUser(user);
      await tokenStorage.setUser(user);
      //console.log("AUTH STATE", useAuthStore.getState());
      console.log("AUTH AFTER LOGIN", useAuthStore.getState().isAuthenticated);
    },
    onError: (error: any) => {
      //console.log("LOGIN ERROR");
      //console.log(error?.response?.status);
    },
  });
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: authApi.forgotPassword,
  });
}
export function useVerifyOTP() {
  return useMutation({
    mutationFn: authApi.verifyOTP,
  });
}
export function useResetPassword() {
  return useMutation({
    mutationFn: authApi.resetPassword,
  });
}
/* 
export function useForgotPassword() {
  return useMutation({
    mutationFn: async (email: string) => {
      const res = await authApi.forgotPassword(email);
      return res.data;
    },
  });
} 
export function useForgotPassword(email: string) {
  return useQuery({
    queryKey: ["forgot-password", email],
    queryFn: async () => {
      const res = await authApi.forgotPassword(email);
      return res.data;
    },
    enabled: !!email,
  });
}  

*/

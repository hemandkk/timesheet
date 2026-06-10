import { create } from "zustand";

export type User = {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  avatar: string;
  timezone: string;
  essl_id: string;
  assignee_id: string;
  expected_daily_hours: number;
  groups: [];
  is_active: true;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) =>
    set({
      user,
      isAuthenticated: true,
    }),

  clearUser: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));

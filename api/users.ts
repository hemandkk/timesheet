import { api } from "./client";

type userEdit = {
  email: string;
  password: string;
};

export const usersApi = {
  getAll() {
    return api.get("/users/");
  },
  getAttendanceRequests(status?: string | null) {
    const params = status ? `?status=Pending` : "";
    return api.get(`/attendance/requests/admin/${params}`);
  },
};

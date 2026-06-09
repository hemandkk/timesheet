import { patientApi } from "@/api/leave";
import { useQuery } from "@tanstack/react-query";

export function usePatients() {
  return useQuery({
    queryKey: ["patients"],
    queryFn: async () => {
      const res = await patientApi.getAll();
      return res.data;
    },
  });
}

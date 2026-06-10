export const getApiError = (error: any) => {
  return (
    error?.response?.data?.message || error?.message || "Something went wrong"
  );
};

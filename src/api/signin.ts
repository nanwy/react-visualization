import axios from "./axios";

export const login = async (data: any) => {
  const response = await axios({
    method: "post",
    url: "/api/user/login",
    data,
  });
  return response;
};

export const getData = async (id: any) => {
  const response = await axios({
    url: `/api/dashboard/chartbydashboard?dashboard_id=${id}`,
  });
  return response;
};

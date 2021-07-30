import { makeRequest } from "./index";
import axios from "./axios";

export const login = async (data: any) => {
  const response = await axios({
    method: "post",
    url: "/api/user/login",
    data,
  });
  return response;
};

export const loginReq = makeRequest("/api/user/login", "post");

// export const getData = async (id: any) => {
//   const response = await axios({
//     url: `/api/dashboard/chartbydashboard?dashboard_id=${id}`,
//   });
//   return response;
// };

export const getData = makeRequest("/api/dashboard/chartbydashboard");

export const getUser = makeRequest("/api/user/info");

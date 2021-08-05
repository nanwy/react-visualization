import { useAsync } from "./../utils/use-async";
import { makeRequest } from "./index";
import axios from "./axios";
import useAsyncFn from "../hooks/useAsyncFn";
import { useFetch } from "../hooks";

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

export const getUser = async () => {
  const response = await axios({
    url: "/api/user/info",
  });
  return response;
};

export const getData = makeRequest("/api/dashboard/chartbydashboard");

// export const getUser = makeRequest("/api/user/info");

export const useGetUser = () =>
  useFetch<any>("/api/user/info", { method: "get" });
export const useLogin = () =>
  useFetch<any, any>("/api/user/login", { method: "post" });
export const useSignup = () =>
  useFetch<any, any>("/api/user/create", { method: "post" });

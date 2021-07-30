import { message } from "antd";
import { AxiosRequestConfig, Method } from "axios";
import axios from "./axios";

const request = async (url: string, params: any, method: Method = "get") => {
  console.log(method);
  const args = method === "get" ? { params } : { data: params };
  message.loading({ content: "请稍后", key: url });
  const res = await axios({
    method,
    url,
    ...args,
  });
  message.destroy(url);
  return res.data;
};

const get = async (url: string, params: any) => {
  const loading = message.loading({ content: "请稍后", key: url });
  const res = await axios({
    method: "get",
    url,
    params,
  });
  message.destroy(url);
  return res;
};

const post = async (url: string, data: any) => {
  const loading = message.loading({ content: "请稍后", key: url });
  const res = await axios({
    method: "post",
    url,
    data,
  });
  message.destroy(url);
  return res.data;
};

export const makeRequest = (url: string, method?: Method) => {
  return async (params?: any) => {
    console.log(method, "me");
    // if (method === "post") {
    //   return request(url, params,method);
    // }
    return request(url, params, method);
    // const res = await axios.request({
    //   method,
    //   url,
    //   data: params,
    // });
    // message.destroy(url);
    // setTimeout(loading, 0);
    // return res;
  };
};

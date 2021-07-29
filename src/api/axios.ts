import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { message, Button } from "antd";

import { SERVER } from "../constants";

const TIME_OUT = 5000;
const createInstance = () => {
  const instance = axios.create({
    // baseURL: SERVER,
    withCredentials: true,
    timeout: TIME_OUT,
  });
  const loading = new Loading();
  instance.interceptors.request.use(
    (config) => {
      loading.setLoading();
      return config;
    },
    (err) => {
      loading.closeLoading();
    }
  );
  instance.interceptors.response.use(
    (config) => {
      loading.closeLoading();
      return config;
    },
    (err) => {
      loading.closeLoading();
      return Promise.reject(err);
    }
  );
  return instance;
};

class Loading {
  loading: any;
  constructor() {
    this.loading = "";
  }
  setLoading() {
    this.loading = message.loading("请稍后", 0);
  }
  closeLoading() {
    Promise.resolve().then(this.loading);
  }
}
const handleRequest = (loading: any) => {
  message.loading("请稍后", 0);
  // Dismiss manually and asynchronously
  setTimeout(loading, 2500);
};

interface Instance extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<any>;
}
export const request: Instance = createInstance();

export default request;

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
  //   const loading = new Loading();
  interceptors(instance);
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
    // Promise.resolve().then(this.loading);
    console.log("关闭");
    setTimeout(this.loading, 0);
  }
}
const handleRequest = (loading: any) => {
  message.loading("请稍后", 0);
  // Dismiss manually and asynchronously
  setTimeout(loading, 2500);
};

const interceptors = (instance: Instance) => {
  let hide: any;
  console.log("加载");
  instance.interceptors.request.use(
    (config) => {
      //   loading.setLoading();
      console.log(config);
      //   hide = message.loading({content:'请稍后',key:config});
      return config;
    },
    (err) => {
      console.log(err, "err1");
      setTimeout(hide, 0);

      //   loading.closeLoading();
    }
  );
  instance.interceptors.response.use(
    (config) => {
      //   loading.closeLoading();
      //   setTimeout(hide, 0);

      return config;
    },
    (err) => {
      //   loading.closeLoading();
      message.destroy();
      //   setTimeout(hide, 0);

      console.log(err, "err");
      //   return Promise.reject(err);
    }
  );
};

interface Instance extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<any>;
}
export const request: Instance = createInstance();

export default request;

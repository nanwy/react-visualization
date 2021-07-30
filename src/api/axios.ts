import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { message, Button } from "antd";

import { SERVER } from "../constants";
import { getToken } from "../utils/auth";

const TIME_OUT = 5000;
const createInstance = () => {
  const instance = axios.create({
    // baseURL: SERVER,
    withCredentials: true,
    timeout: TIME_OUT,
  });
  //   const loading = new Loading();
  instance.interceptors.request.use(
    (config) => {
      if (getToken()) {
        config.headers.Authorization = `Bearer ${getToken()}`;
      }
      return config;
    },
    (err) => {}
  );
  instance.interceptors.response.use(
    (config) => {
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return instance;
};

const interceptors = (instance: Instance) => {
  let hide: any;
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

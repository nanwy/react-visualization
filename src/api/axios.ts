import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { RequestConfig } from "../constants";
import { getToken } from "../utils/auth";
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

// import axios, { AxiosRequestConfig } from "axios";
// import { SESSION_STORAGE_KEY } from "../constants";

const httpClient = axios.create();

httpClient.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    // eslint-disable-next-line
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const REFRESH_PERIOD_IN_MS = 60_000;

const cache = new Map<
  string | symbol,
  { lastFetchedTime: number; data: unknown }
>();

const fetch = async <T>(url: string, { method, data }: AxiosRequestConfig) =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  (await httpClient(url, { method, data })).data as T;

// eslint-disable-next-line import/prefer-default-export
export const getData = async <T = void, U = never>(
  url: string,
  config?: RequestConfig<U>
): Promise<T> => {
  const { method = "get", body, relatedKey } = config ?? {};

  if (method === "get") {
    const cached = cache.get(url);

    if (cached && Date.now() - cached.lastFetchedTime <= REFRESH_PERIOD_IN_MS) {
      return cached.data as T;
    }

    const data = await fetch<T>(url, { method, data: body });

    cache.set(url, { lastFetchedTime: Date.now(), data });

    return data;
  }

  const data = await fetch<T>(url, { method, data: body });

  if (relatedKey) {
    relatedKey.forEach((rKey) => cache.delete(rKey));
  }

  return data;
};

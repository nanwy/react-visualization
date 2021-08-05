import { useCallback, useRef, useState } from "react";
import { AxiosError } from "axios";
import { getData } from "../api/axios";
import { message } from "antd";
import {
  APICallState,
  APIResponse,
  UseFetchOptionParameter,
  UseFetchReturnType,
} from "../constants";

export const unwrapResult = <T>({ data, error }: APIResponse<T>) =>
  error ? Promise.reject(error) : Promise.resolve(data as T);

const useFetch = <T = never, U = void>(
  url: string,
  option?: UseFetchOptionParameter
): UseFetchReturnType<T, U> => {
  const [state, setState] = useState<APICallState<T>>({
    data: null,
    error: null,
    status: "idle",
  });

  const { method = "get", relatedKey = [] } = option ?? {};

  const rKey = useRef(relatedKey);

  const makeRequest = useCallback(
    async (body: U) => {
      try {
        setState((prev) => ({ ...prev, status: "loading" }));
        message.loading({ content: "请稍后", key: url });
        const data = await getData<T, U>(url, {
          body,
          method,
          relatedKey: rKey.current,
        });

        setState((prev) => ({ ...prev, status: "succeed", data, error: null }));
        message.destroy(url);

        return { data, error: null };
      } catch (err) {
        const error = err as AxiosError;

        setState((prev) => ({ ...prev, status: "failed", error, data: null }));
        message.destroy(url);

        return { data: null, error };
      }
    },
    [method, url]
  );

  const done = useCallback(
    () => setState((prev) => ({ ...prev, status: "idle" })),
    []
  );

  return {
    ...state,
    makeRequest,
    done,
    isSucceed: state.status === "succeed",
    isLoading: state.status === "loading",
    isFailed: state.status === "failed",
    isIdle: state.status === "idle",
  };
};

export default useFetch;

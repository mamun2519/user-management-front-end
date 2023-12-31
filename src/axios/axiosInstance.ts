// import { authKey } from "@/constants/storageKey";
// import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
// import { getFromLocalStorage } from "@/utils/local-storage";

import axios from "axios";
import { authKey } from "../constants/storageKey";
import { IGenericErrorResponse } from "../types";
import { getFromLocalStorage } from "../utils/local-storage";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);
    console.log(accessToken);

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor

instance.interceptors.response.use(
  function (response) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const responseObject: any = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  function (error) {
    // console.log(error.response.data.message);
    const responseObject: IGenericErrorResponse = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
      errorMessages: error?.response?.data?.message,
    };
    // return responseObject;
    return Promise.reject(responseObject);
  }
);

export { instance };

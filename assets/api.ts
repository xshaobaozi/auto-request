import axios from "axios";

import {
  ApiverificationsGetParams,
  ApiverificationsGetResponse,
  ApicontestantPostParams,
  ApicontestantPostResponse,
  ApipersonGetParams,
  ApipersonGetResponse,
  ApiloginPostParams,
  ApiloginPostResponse,
} from "./api.define";

export const ApiverificationsGet = <
  P = ApiverificationsGetParams,
  T = ApiverificationsGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `/api/verifications`,
    method: "get",

    params: params,
    ...options,
  });
};

export const ApicontestantPost = <
  P = ApicontestantPostParams,
  T = ApicontestantPostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `/api/contestant`,
    method: "post",

    data: params,
    ...options,
  });
};

export const ApipersonGet = <P = ApipersonGetParams, T = ApipersonGetResponse>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `/api/person`,
    method: "get",

    params: params,
    ...options,
  });
};

export const ApiloginPost = <P = ApiloginPostParams, T = ApiloginPostResponse>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `/api/login`,
    method: "post",

    data: params,
    ...options,
  });
};

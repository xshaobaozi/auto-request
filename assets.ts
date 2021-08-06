import Taro from "@tarojs/taro";

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
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/api/verifications`,
      method: "get",
      data: params,
      complete: (res: T) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      },
      ...options,
    });
  });
};

export const ApicontestantPost = <
  P = ApicontestantPostParams,
  T = ApicontestantPostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/api/contestant`,
      method: "post",
      data: params,
      complete: (res: T) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      },
      ...options,
    });
  });
};

export const ApipersonGet = <P = ApipersonGetParams, T = ApipersonGetResponse>(
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/api/person`,
      method: "get",
      data: params,
      complete: (res: T) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      },
      ...options,
    });
  });
};

export const ApiloginPost = <P = ApiloginPostParams, T = ApiloginPostResponse>(
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/api/login`,
      method: "post",
      data: params,
      complete: (res: T) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      },
      ...options,
    });
  });
};

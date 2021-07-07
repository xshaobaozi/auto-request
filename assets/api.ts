import Taro from "@tarojs/taro";

import {
  EditUserInfoPostParams,
  EditUserInfoPostResponse,
  LoginGetParams,
  LoginGetResponse,
  DictDictIditemsItemIdGetParams,
  DictDictIditemsItemIdGetResponse,
  DictsDictIditemsItemIdPutParams,
  DictsDictIditemsItemIdPutResponse,
  DictsDictIditemsItemIdDeleteParams,
  DictsDictIditemsItemIdDeleteResponse,
  DictsDictIditemsPostParams,
  DictsDictIditemsPostResponse,
  DictsDictIditemsGetParams,
  DictsDictIditemsGetResponse,
  DictsPostParams,
  DictsPostResponse,
  DictsGetParams,
  DictsGetResponse,
  DictsDictIdDeleteParams,
  DictsDictIdDeleteResponse,
  DictsDictIdPutParams,
  DictsDictIdPutResponse,
  DictDictIdGetParams,
  DictDictIdGetResponse,
  DictsDictIditemsAsPageGetParams,
  DictsDictIditemsAsPageGetResponse,
  DictsDictCodeitemsByCodeGetParams,
  DictsDictCodeitemsByCodeGetResponse,
  DictsAsPageGetParams,
  DictsAsPageGetResponse,
} from "./api.define";

export const EditUserInfoPost = <
  P = EditUserInfoPostParams,
  T = EditUserInfoPostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/editUserInfo`,
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

export const LoginGet = <P = LoginGetParams, T = LoginGetResponse>(
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/login`,
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

export const DictDictIditemsItemIdGet = <
  P = DictDictIditemsItemIdGetParams,
  T = DictDictIditemsItemIdGetResponse
>(
  ItemId: any,
  DictId: any,
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dict/${DictId}/items/${ItemId}`,
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

export const DictsDictIditemsItemIdPut = <
  P = DictsDictIditemsItemIdPutParams,
  T = DictsDictIditemsItemIdPutResponse
>(
  ItemId: any,
  DictId: any,
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dicts/${DictId}/items/${ItemId}`,
      method: "put",
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

export const DictsDictIditemsItemIdDelete = <
  P = DictsDictIditemsItemIdDeleteParams,
  T = DictsDictIditemsItemIdDeleteResponse
>(
  ItemId: any,
  DictId: any,
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dicts/${DictId}/items/${ItemId}`,
      method: "delete",
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

export const DictsDictIditemsPost = <
  P = DictsDictIditemsPostParams,
  T = DictsDictIditemsPostResponse
>(
  DictId: any,
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dicts/${DictId}/items`,
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

export const DictsDictIditemsGet = <
  P = DictsDictIditemsGetParams,
  T = DictsDictIditemsGetResponse
>(
  DictId: any,
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dicts/${DictId}/items`,
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

export const DictsPost = <P = DictsPostParams, T = DictsPostResponse>(
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dicts`,
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

export const DictsGet = <P = DictsGetParams, T = DictsGetResponse>(
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dicts`,
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

export const DictsDictIdDelete = <
  P = DictsDictIdDeleteParams,
  T = DictsDictIdDeleteResponse
>(
  DictId: any,
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dicts/${DictId}`,
      method: "delete",
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

export const DictsDictIdPut = <
  P = DictsDictIdPutParams,
  T = DictsDictIdPutResponse
>(
  DictId: any,
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dicts/${DictId}`,
      method: "put",
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

export const DictDictIdGet = <
  P = DictDictIdGetParams,
  T = DictDictIdGetResponse
>(
  DictId: any,
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dict/${DictId}`,
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

export const DictsDictIditemsAsPageGet = <
  P = DictsDictIditemsAsPageGetParams,
  T = DictsDictIditemsAsPageGetResponse
>(
  DictId: any,
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dicts/${DictId}/items?_as_page`,
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

export const DictsDictCodeitemsByCodeGet = <
  P = DictsDictCodeitemsByCodeGetParams,
  T = DictsDictCodeitemsByCodeGetResponse
>(
  DictCode: any,
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dicts/${DictCode}/items?_by_code`,
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

export const DictsAsPageGet = <
  P = DictsAsPageGetParams,
  T = DictsAsPageGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `/dicts?_as_page`,
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

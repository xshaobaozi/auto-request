import Taro from "@tarojs/taro";

export const EditUserInfoPost = <P = unknown, T = unknown>(
  params: P,
  options?
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `https:///commons/editUserInfo`,
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

export const LoginGet = <P = unknown, T = unknown>(
  params: P,
  options?
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `https:///commons/login`,
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

export const Dict$dictIditems$itemIdGet = <P = unknown, T = unknown>(
  ItemId: any,
  DictId: any,
  params: P,
  options?
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `https:///commons/dict/${DictId}/items/${ItemId}`,
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

export const Dicts$dictIditemsPost = <P = unknown, T = unknown>(
  DictId: any,
  params: P,
  options?
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `https:///commons/dicts/${DictId}/items`,
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

export const Dicts$dictIditemsGet = <P = unknown, T = unknown>(
  DictId: any,
  params: P,
  options?
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `https:///commons/dicts/${DictId}/items`,
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

export const DictsPost = <P = unknown, T = unknown>(
  params: P,
  options?
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `https:///commons/dicts`,
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

export const DictsGet = <P = unknown, T = unknown>(
  params: P,
  options?
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `https:///commons/dicts`,
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

export const Dict$dictIdGet = <P = unknown, T = unknown>(
  DictId: any,
  params: P,
  options?
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `https:///commons/dict/${DictId}`,
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

export const Dicts$dictIditemsAsPageGet = <P = unknown, T = unknown>(
  DictId: any,
  params: P,
  options?
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `https:///commons/dicts/${DictId}/items?_as_page`,
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

export const Dicts$dictCodeitemsByCodeGet = <P = unknown, T = unknown>(
  DictCode: any,
  params: P,
  options?
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `https:///commons/dicts/${DictCode}/items?_by_code`,
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

export const DictsAsPageGet = <P = unknown, T = unknown>(
  params: P,
  options?
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `https:///commons/dicts?_as_page`,
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

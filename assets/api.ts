
  import Taro from '@tarojs/taro';
  



  export const EditUserInfoPost = <P = unknown, T = unknown>(params: P, options?):Promise<T> => {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: 'https://yapi.yashili.com/mock/151/editUserInfo',
        method: 'post',
        data: params,
        complete: (res: T) => {resolve(res)},
        fail: (err) => {reject(err)},
        ...options,
      })
    })
  }
  

  export const LoginGet = <P = unknown, T = unknown>(params: P, options?):Promise<T> => {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: 'https://yapi.yashili.com/mock/151/login',
        method: 'get',
        data: params,
        complete: (res: T) => {resolve(res)},
        fail: (err) => {reject(err)},
        ...options,
      })
    })
  }
  
import axios from "axios"
import {
  ShopvisitstatisticsGetRequset,
  ShopvisitstatisticsGetResponse,
  ShopvisitdetialsUserIdAsPageGetRequset,
  ShopvisitdetialsUserIdAsPageGetResponse,
  ShopsGetRequset,
  ShopsGetResponse,
  ShopsAsPageGetRequset,
  ShopsAsPageGetResponse,
  ShopsIdGetRequset,
  ShopsIdGetResponse,
  ShopsalesstatisticsShopIdGetRequset,
  ShopsalesstatisticsShopIdGetResponse,
  DictsDictIditemsGetRequset,
  DictsDictIditemsGetResponse,
  DictsDictCodeitemsByCodeGetRequset,
  DictsDictCodeitemsByCodeGetResponse,
  DictsGetRequset,
  DictsGetResponse,
  DivisionsIdGetRequset,
  DivisionsIdGetResponse,
  DivisionsGetRequset,
  DivisionsGetResponse,
} from "./index.define"

export const ShopvisitstatisticsGet = <
  P extends ShopvisitstatisticsGetRequset,
  T extends ShopvisitstatisticsGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/shop/visit/statistics`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ShopvisitdetialsUserIdAsPageGet = <
  P extends ShopvisitdetialsUserIdAsPageGetRequset,
  T extends ShopvisitdetialsUserIdAsPageGetResponse
>(
  UserId: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/shop/visit/detials/${UserId}?_as_page`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ShopsGet = <P extends ShopsGetRequset, T extends ShopsGetResponse>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/shops`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ShopsAsPageGet = <
  P extends ShopsAsPageGetRequset,
  T extends ShopsAsPageGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/shops?_as_page`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ShopsIdGet = <
  P extends ShopsIdGetRequset,
  T extends ShopsIdGetResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/shops/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ShopsalesstatisticsShopIdGet = <
  P extends ShopsalesstatisticsShopIdGetRequset,
  T extends ShopsalesstatisticsShopIdGetResponse
>(
  ShopId: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/shop/sales/statistics/${ShopId}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DictsDictIditemsGet = <
  P extends DictsDictIditemsGetRequset,
  T extends DictsDictIditemsGetResponse
>(
  DictId: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/dicts/${DictId}/items`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DictsDictCodeitemsByCodeGet = <
  P extends DictsDictCodeitemsByCodeGetRequset,
  T extends DictsDictCodeitemsByCodeGetResponse
>(
  DictCode: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/dicts/${DictCode}/items?_by_code`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DictsGet = <P extends DictsGetRequset, T extends DictsGetResponse>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/dicts`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DivisionsIdGet = <
  P extends DivisionsIdGetRequset,
  T extends DivisionsIdGetResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/divisions/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DivisionsGet = <
  P extends DivisionsGetRequset,
  T extends DivisionsGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/divisions`,
    method: "get",
    params: params,
    ...options,
  })
}

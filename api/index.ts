import axios, { AxiosResponse } from "axios"
import {
  LoginPostResponse,
  LoginPostRequset,
  VerificationsPostResponse,
  VerificationsPostRequset,
  RegionsAsTreeGetResponse,
  RegionsAsTreeGetResponseChildren,
  RegionsAsTreeGetRequset,
  ProfilesPostResponse,
  ProfilesPostRequset,
  ProfilesPostRequsetBadies,
  ProfilesPostRequsetAddresses,
  AddressesGetResponse,
  AddressesGetRequset,
  CardsCardCodestatesPostResponse,
  CardsGetResponse,
  CardsGetResponseAccount,
  CardsGetRequset,
  ProductsGetResponse,
  ProductsGetResponseSkus,
  ProductsGetRequset,
  OrdersAsPageGetResponse,
  OrdersAsPageGetResponseContent,
  OrdersAsPageGetRequset,
  OrdersPostResponse,
  OrdersPostRequset,
  OrdersPostRequsetSkus,
  AdmincardsCardIdstatesPostResponse,
  AdmincardsCardIdstatesPostRequset,
  AdmincardsAsPageGetResponse,
  AdmincardsAsPageGetResponseContent,
  AdmincardsAsPageGetResponseSort,
  AdmincardsAsPageGetRequset,
  AdminordersAsPageGetResponse,
  AdminordersAsPageGetResponseContent,
  AdminordersAsPageGetRequset,
  AdminexportCardGetResponse,
  AdminexportCardGetRequset,
  AdminexportOrderGetResponse,
  AdminexportOrderGetRequset,
  AdminordersOrderIdsendOutPostResponse,
  AdminordersOrderIdsendOutPostRequset,
} from "./index.define"

export const LoginPost = <
  P extends LoginPostRequset,
  T = AxiosResponse<LoginPostResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 登录
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/login`,
    method: "post",
    data: params,
    ...options,
  })
}

export const VerificationsPost = <
  P extends VerificationsPostRequset,
  T = AxiosResponse<VerificationsPostResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 新增验证码
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/verifications`,
    method: "post",
    data: params,
    ...options,
  })
}

export const RegionsAsTreeGet = <
  P extends RegionsAsTreeGetRequset,
  T = AxiosResponse<RegionsAsTreeGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 获取行政区域（树形）
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/regions?_as_tree`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ProfilesPost = <
  P extends ProfilesPostRequset,
  T = AxiosResponse<ProfilesPostResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 新增我的信息
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/profiles`,
    method: "post",
    data: params,
    ...options,
  })
}

export const AddressesGet = <
  P extends AddressesGetRequset,
  T = AxiosResponse<AddressesGetResponse[]>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 获取我的地址
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/addresses`,
    method: "get",
    params: params,
    ...options,
  })
}

export const CardsCardCodestatesPost = <
  P extends any,
  T = AxiosResponse<CardsCardCodestatesPostResponse>
>(
  CardCode: any,
  params: P,
  options?: any
): Promise<T> => {
  // 新增卡片状态？
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cards/${CardCode}/states`,
    method: "post",
    data: params,
    ...options,
  })
}

export const CardsGet = <
  P extends CardsGetRequset,
  T = AxiosResponse<CardsGetResponse[]>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 获取我的卡片
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cards`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ProductsGet = <
  P extends ProductsGetRequset,
  T = AxiosResponse<ProductsGetResponse[]>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 获取商品列表（根据卡种主键）
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/products`,
    method: "get",
    params: params,
    ...options,
  })
}

export const OrdersAsPageGet = <
  P extends OrdersAsPageGetRequset,
  T = AxiosResponse<OrdersAsPageGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 获取用户订单列表（分页）
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/orders?_as_page`,
    method: "get",
    params: params,
    ...options,
  })
}

export const OrdersPost = <
  P extends OrdersPostRequset,
  T = AxiosResponse<OrdersPostResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 创建一个订单
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/orders`,
    method: "post",
    data: params,
    ...options,
  })
}

export const AdmincardsCardIdstatesPost = <
  P extends AdmincardsCardIdstatesPostRequset,
  T = AxiosResponse<AdmincardsCardIdstatesPostResponse>
>(
  CardId: any,
  params: P,
  options?: any
): Promise<T> => {
  // 审核卡片
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/admin/cards/${CardId}/states/{}`,
    method: "post",
    data: params,
    ...options,
  })
}

export const AdmincardsAsPageGet = <
  P extends AdmincardsAsPageGetRequset,
  T = AxiosResponse<AdmincardsAsPageGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 获取卡片（分页）
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/admin/cards?_as_page`,
    method: "get",
    params: params,
    ...options,
  })
}

export const AdminordersAsPageGet = <
  P extends AdminordersAsPageGetRequset,
  T = AxiosResponse<AdminordersAsPageGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 获取订单列表（分页）
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/admin/orders?_as_page`,
    method: "get",
    params: params,
    ...options,
  })
}

export const AdminexportCardGet = <
  P extends AdminexportCardGetRequset,
  T = AxiosResponse<AdminexportCardGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 导出卡片审核
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/admin/export-card`,
    method: "get",
    params: params,
    ...options,
  })
}

export const AdminexportOrderGet = <
  P extends AdminexportOrderGetRequset,
  T = AxiosResponse<AdminexportOrderGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 导出发货订单
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/admin/export-order`,
    method: "get",
    params: params,
    ...options,
  })
}

export const AdminordersOrderIdsendOutPost = <
  P extends AdminordersOrderIdsendOutPostRequset,
  T = AxiosResponse<AdminordersOrderIdsendOutPostResponse>
>(
  OrderId: any,
  params: P,
  options?: any
): Promise<T> => {
  // 发货
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/admin/orders/${OrderId}/send-out`,
    method: "post",
    data: params,
    ...options,
  })
}

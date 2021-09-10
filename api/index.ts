import Taro, { RequestTask } from "@tarojs/taro"
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

export const LoginPost = <P extends LoginPostRequset, T = LoginPostResponse>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 登录
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178//login`,
    method: "post",
    data: params,
    ...options,
  })
}

export const VerificationsPost = <
  P extends VerificationsPostRequset,
  T = VerificationsPostResponse
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 新增验证码
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178//verifications`,
    method: "post",
    data: params,
    ...options,
  })
}

export const RegionsAsTreeGet = <
  P extends RegionsAsTreeGetRequset,
  T = RegionsAsTreeGetResponse
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取行政区域（树形）
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/regions?_as_tree`,
    method: "get",
    data: params,
    ...options,
  })
}

export const ProfilesPost = <
  P extends ProfilesPostRequset,
  T = ProfilesPostResponse
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 新增我的信息
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178//profiles`,
    method: "post",
    data: params,
    ...options,
  })
}

export const AddressesGet = <
  P extends AddressesGetRequset,
  T = AddressesGetResponse[]
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取我的地址
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/addresses`,
    method: "get",
    data: params,
    ...options,
  })
}

export const CardsCardCodestatesPost = <
  P extends any,
  T = CardsCardCodestatesPostResponse
>(
  CardCode: any,
  params: P,
  options?: any
): RequestTask<T> => {
  // 新增卡片状态？
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178//cards/${CardCode}/states`,
    method: "post",
    data: params,
    ...options,
  })
}

export const CardsGet = <P extends CardsGetRequset, T = CardsGetResponse[]>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取我的卡片
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/cards`,
    method: "get",
    data: params,
    ...options,
  })
}

export const ProductsGet = <
  P extends ProductsGetRequset,
  T = ProductsGetResponse[]
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取商品列表（根据卡种主键）
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/products`,
    method: "get",
    data: params,
    ...options,
  })
}

export const OrdersAsPageGet = <
  P extends OrdersAsPageGetRequset,
  T = OrdersAsPageGetResponse
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取用户订单列表（分页）
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/orders?_as_page`,
    method: "get",
    data: params,
    ...options,
  })
}

export const OrdersPost = <P extends OrdersPostRequset, T = OrdersPostResponse>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 创建一个订单
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178//orders`,
    method: "post",
    data: params,
    ...options,
  })
}

export const AdmincardsCardIdstatesPost = <
  P extends AdmincardsCardIdstatesPostRequset,
  T = AdmincardsCardIdstatesPostResponse
>(
  CardId: any,
  params: P,
  options?: any
): RequestTask<T> => {
  // 审核卡片
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178//admin/cards/${CardId}/states/{}`,
    method: "post",
    data: params,
    ...options,
  })
}

export const AdmincardsAsPageGet = <
  P extends AdmincardsAsPageGetRequset,
  T = AdmincardsAsPageGetResponse
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取卡片（分页）
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/admin/cards?_as_page`,
    method: "get",
    data: params,
    ...options,
  })
}

export const AdminordersAsPageGet = <
  P extends AdminordersAsPageGetRequset,
  T = AdminordersAsPageGetResponse
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取订单列表（分页）
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/admin/orders?_as_page`,
    method: "get",
    data: params,
    ...options,
  })
}

export const AdminexportCardGet = <
  P extends AdminexportCardGetRequset,
  T = AdminexportCardGetResponse
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 导出卡片审核
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/admin/export-card`,
    method: "get",
    data: params,
    ...options,
  })
}

export const AdminexportOrderGet = <
  P extends AdminexportOrderGetRequset,
  T = AdminexportOrderGetResponse
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 导出发货订单
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/admin/export-order`,
    method: "get",
    data: params,
    ...options,
  })
}

export const AdminordersOrderIdsendOutPost = <
  P extends AdminordersOrderIdsendOutPostRequset,
  T = AdminordersOrderIdsendOutPostResponse
>(
  OrderId: any,
  params: P,
  options?: any
): RequestTask<T> => {
  // 发货
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178//admin/orders/${OrderId}/send-out`,
    method: "post",
    data: params,
    ...options,
  })
}

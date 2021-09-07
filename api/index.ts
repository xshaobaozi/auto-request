import axios, { AxiosResponse } from "axios"
import {
  DictsDictIditemsGetRequset,
  DictsDictCodeitemsByCodeGetRequset,
  DictsGetRequset,
  DivisionsIdGetResponse,
  DivisionsIdGetRequset,
  DivisionsGetResponse,
  DivisionsGetRequset,
  OrganizationsGetRequset,
  ProductsGetRequset,
  ShopsGetRequset,
  ShopsIdGetResponse,
  ShopsIdGetResponseBaseInfo,
  ShopsIdGetResponseMemberInfo,
  ShopsIdGetResponseSalesData,
  ShopsIdGetResponseSalesDataMontSalesData,
  ShopsIdGetResponseSalesDataMontSalesDataProductSalesDataList,
  ShopsIdGetResponseSalesDataYearSalesData,
  ShopsIdGetResponseSalesDataYearSalesDataProductSalesDataList,
  ShopsIdGetResponseActivityInfo,
  ShopsIdGetResponseActivityInfoActivityList,
  ShopsIdGetRequset,
  VisitsummaryEmployeeIdGetResponse,
  VisitsummaryEmployeeIdGetRequset,
  VisitdetialsEmployeeIdAsPageGetResponse,
  VisitdetialsEmployeeIdAsPageGetResponseRecords,
  VisitdetialsEmployeeIdAsPageGetRequset,
  VisitorganizationstatisticsGetRequset,
  VisitemployeestatisticsGetResponse,
  VisitemployeestatisticsGetResponseEmployeeStatisticsList,
  VisitemployeestatisticsGetRequset,
} from "./index.define"

export const DictsDictIditemsGet = <
  P extends DictsDictIditemsGetRequset,
  T = AxiosResponse<any>
>(
  DictId: any,
  params: P,
  options?: any
): Promise<T> => {
  // 获取多个字典项目（列表）
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/dicts/${DictId}/items`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DictsDictCodeitemsByCodeGet = <
  P extends DictsDictCodeitemsByCodeGetRequset,
  T = AxiosResponse<any>
>(
  DictCode: any,
  params: P,
  options?: any
): Promise<T> => {
  // 获取多个字典项目（列表）
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/dicts/${DictCode}/items?_by_code`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DictsGet = <P extends DictsGetRequset, T = AxiosResponse<any>>(
  params: P,
  options?: any
): Promise<T> => {
  // 获取多个数据字典（列表）
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/dicts`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DivisionsIdGet = <
  P extends DivisionsIdGetRequset,
  T = AxiosResponse<DivisionsIdGetResponse>
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  // 获取行政区划信息
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/divisions/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DivisionsGet = <
  P extends DivisionsGetRequset,
  T = AxiosResponse<DivisionsGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 获取行政区划列表
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/divisions`,
    method: "get",
    params: params,
    ...options,
  })
}

export const OrganizationsGet = <
  P extends OrganizationsGetRequset,
  T = AxiosResponse<any>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 组织列表
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/organizations`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ProductsGet = <
  P extends ProductsGetRequset,
  T = AxiosResponse<any>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 产品列表
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/products`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ShopsGet = <P extends ShopsGetRequset, T = AxiosResponse<any>>(
  params: P,
  options?: any
): Promise<T> => {
  // 门店列表
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/shops`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ShopsIdGet = <
  P extends ShopsIdGetRequset,
  T = AxiosResponse<ShopsIdGetResponse>
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  // 门店详情
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/shops/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const VisitsummaryEmployeeIdGet = <
  P extends VisitsummaryEmployeeIdGetRequset,
  T = AxiosResponse<VisitsummaryEmployeeIdGetResponse>
>(
  EmployeeId: any,
  params: P,
  options?: any
): Promise<T> => {
  // 获取某个用户的拜访汇总
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/visit/summary/${EmployeeId}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const VisitdetialsEmployeeIdAsPageGet = <
  P extends VisitdetialsEmployeeIdAsPageGetRequset,
  T = AxiosResponse<VisitdetialsEmployeeIdAsPageGetResponse>
>(
  EmployeeId: any,
  params: P,
  options?: any
): Promise<T> => {
  // 获取某个用户的拜访明细
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/visit/detials/${EmployeeId}?_as_page`,
    method: "get",
    params: params,
    ...options,
  })
}

export const VisitorganizationstatisticsGet = <
  P extends VisitorganizationstatisticsGetRequset,
  T = AxiosResponse<any>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 销售组织拜访统计
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/visit/organization/statistics`,
    method: "get",
    params: params,
    ...options,
  })
}

export const VisitemployeestatisticsGet = <
  P extends VisitemployeestatisticsGetRequset,
  T = AxiosResponse<VisitemployeestatisticsGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 员工拜访统计
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/visit/employee/statistics`,
    method: "get",
    params: params,
    ...options,
  })
}

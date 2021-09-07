import Taro, { RequestTask } from "@tarojs/taro"
import {
  DictsDictIditemsGetResponse,
  DictsDictIditemsGetRequset,
  DictsDictCodeitemsByCodeGetResponse,
  DictsDictCodeitemsByCodeGetRequset,
  DictsGetResponse,
  DictsGetRequset,
  DivisionsIdGetResponse,
  DivisionsIdGetRequset,
  DivisionsGetResponse,
  DivisionsGetRequset,
  OrganizationsGetResponse,
  OrganizationsGetResponseSubOrganizationList,
  OrganizationsGetRequset,
  ProductsGetResponse,
  ProductsGetRequset,
  ShopsGetResponse,
  ShopsGetResponseAlarmList,
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
  VisitsummaryEmployeeCodeGetResponse,
  VisitsummaryEmployeeCodeGetRequset,
  VisitdetialsEmployeeCodeAsPageGetResponse,
  VisitdetialsEmployeeCodeAsPageGetResponseRecords,
  VisitdetialsEmployeeCodeAsPageGetRequset,
  VisitorganizationstatisticsGetResponse,
  VisitorganizationstatisticsGetResponseSubOrgStatisticsList,
  VisitorganizationstatisticsGetRequset,
  VisitemployeestatisticsGetResponse,
  VisitemployeestatisticsGetResponseEmployeeStatisticsList,
  VisitemployeestatisticsGetRequset,
} from "./index.define"

export const DictsDictIditemsGet = <
  P extends DictsDictIditemsGetRequset,
  T = DictsDictIditemsGetResponse[]
>(
  DictId: any,
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取多个字典项目（列表）
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/dicts/${DictId}/items`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DictsDictCodeitemsByCodeGet = <
  P extends DictsDictCodeitemsByCodeGetRequset,
  T = DictsDictCodeitemsByCodeGetResponse[]
>(
  DictCode: any,
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取多个字典项目（列表）
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/dicts/${DictCode}/items?_by_code`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DictsGet = <P extends DictsGetRequset, T = DictsGetResponse[]>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取多个数据字典（列表）
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/dicts`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DivisionsIdGet = <
  P extends DivisionsIdGetRequset,
  T = DivisionsIdGetResponse
>(
  Id: any,
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取行政区划信息
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/divisions/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const DivisionsGet = <
  P extends DivisionsGetRequset,
  T = DivisionsGetResponse
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取行政区划列表
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/divisions`,
    method: "get",
    params: params,
    ...options,
  })
}

export const OrganizationsGet = <
  P extends OrganizationsGetRequset,
  T = OrganizationsGetResponse[]
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 组织列表
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/organizations`,
    method: "get",
    params: params,
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
  // 产品列表
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/products`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ShopsGet = <P extends ShopsGetRequset, T = ShopsGetResponse[]>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 门店列表
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/shops`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ShopsIdGet = <P extends ShopsIdGetRequset, T = ShopsIdGetResponse>(
  Id: any,
  params: P,
  options?: any
): RequestTask<T> => {
  // 门店详情
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/shops/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const VisitsummaryEmployeeCodeGet = <
  P extends VisitsummaryEmployeeCodeGetRequset,
  T = VisitsummaryEmployeeCodeGetResponse
>(
  EmployeeCode: any,
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取某个用户的拜访汇总
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/visit/summary/${EmployeeCode}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const VisitdetialsEmployeeCodeAsPageGet = <
  P extends VisitdetialsEmployeeCodeAsPageGetRequset,
  T = VisitdetialsEmployeeCodeAsPageGetResponse
>(
  EmployeeCode: any,
  params: P,
  options?: any
): RequestTask<T> => {
  // 获取某个用户的拜访明细
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/visit/detials/${EmployeeCode}?_as_page`,
    method: "get",
    params: params,
    ...options,
  })
}

export const VisitorganizationstatisticsGet = <
  P extends VisitorganizationstatisticsGetRequset,
  T = VisitorganizationstatisticsGetResponse[]
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 销售组织拜访统计
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/visit/organization/statistics`,
    method: "get",
    params: params,
    ...options,
  })
}

export const VisitemployeestatisticsGet = <
  P extends VisitemployeestatisticsGetRequset,
  T = VisitemployeestatisticsGetResponse
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 员工拜访统计
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/visit/employee/statistics`,
    method: "get",
    params: params,
    ...options,
  })
}

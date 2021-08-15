import axios, { AxiosResponse } from "axios"
import {
  ApistoresGetResponse,
  ApistoresGetResponseRecords,
  ApistoresGetRequset,
  ApistoresPostResponse,
  ApistoresPostRequset,
  ApistoresStoreIdGetResponse,
  ApistoresStoreIdGetResponseLogoFileIds,
  ApistoresStoreIdGetResponseMilkFileIds,
  ApistoresStoreIdGetResponseStoreFileIds,
  ApistoresStoreIdGetResponseAddition,
  ApistoresStoreIdGetResponseStoreChain,
  ApistoresStoreIdGetResponseBusiness,
  ApistoresStoreIdGetRequset,
  ApistoresStoreIdPutRequset,
  ApipointsPointIdGetResponse,
  ApipointsPointIdGetRequset,
  ApistorescountGetResponse,
  ApistorescountGetRequset,
  ApiuserloginPostResponse,
  ApiassetsuploadGetResponse,
  ApiassetsuploadGetRequset,
  AssetsStoreIdimagesFileIdFileNameGetResponse,
  AssetsStoreIdimagesFileIdFileNameGetRequset,
  BiostoresurveyAsPageGetResponse,
  BiostoresurveyAsPageGetResponseContent,
  BiostoresurveyAsPageGetRequset,
  ApistoresurveyIdGetResponse,
  ApistoresurveyIdGetResponseSurveyRegions,
  ApistoresurveyIdGetRequset,
  ApistoresurveyIdDeleteResponse,
  ApistoresurveyIdDeleteRequset,
  BiostoresurveyPostResponse,
  BiostoresurveyPostRequset,
  ApistoresurveyPutResponse,
  ApistoresurveyPutRequset,
  ApistoresurveytaskpageGetResponse,
  ApistoresurveytaskpageGetResponseContent,
  ApistoresurveytaskpageGetRequset,
  ApistoresurveytaskIdGetResponse,
  ApistoresurveytaskIdGetRequset,
  ApistoresurveytaskIdDeleteResponse,
  ApistoresurveytaskIdDeleteRequset,
  ApistoresurveytaskPostResponse,
  ApistoresurveytaskPostRequset,
  ApistoresurveytaskPutResponse,
  ApistoresurveytaskPutRequset,
  ApiregionRegionIdchildrenGetRequset,
  BioregiontreeGetResponse,
  BioregiontreeGetResponseChildren,
  BioregiontreeGetRequset,
} from "./index.define"

export const ApistoresGet = <
  P extends ApistoresGetRequset,
  T = AxiosResponse<ApistoresGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 根据手机查询门店(列表)
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/stores`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ApistoresPost = <
  P extends ApistoresPostRequset,
  T = AxiosResponse<ApistoresPostResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 新建一个门店
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/stores`,
    method: "post",
    data: params,
    ...options,
  })
}

export const ApistoresStoreIdGet = <
  P extends ApistoresStoreIdGetRequset,
  T = AxiosResponse<ApistoresStoreIdGetResponse>
>(
  StoreId: any,
  params: P,
  options?: any
): Promise<T> => {
  // 获取门店信息
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/stores/${StoreId}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ApistoresStoreIdPut = <
  P extends ApistoresStoreIdPutRequset,
  T = AxiosResponse<any>
>(
  StoreId: any,
  params: P,
  options?: any
): Promise<T> => {
  // 修改一个门店
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/stores/${StoreId}`,
    method: "put",
    data: params,
    ...options,
  })
}

export const ApipointsPointIdGet = <
  P extends ApipointsPointIdGetRequset,
  T = AxiosResponse<ApipointsPointIdGetResponse>
>(
  PointId: any,
  params: P,
  options?: any
): Promise<T> => {
  // 获取门店信息(地点)
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/points/${PointId}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ApistorescountGet = <
  P extends ApistorescountGetRequset,
  T = AxiosResponse<ApistorescountGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 统计门店
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/stores/count`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ApiuserloginPost = <
  P extends any,
  T = AxiosResponse<ApiuserloginPostResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 登录
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/user/login`,
    method: "post",
    data: params,
    ...options,
  })
}

export const ApiassetsuploadGet = <
  P extends ApiassetsuploadGetRequset,
  T = AxiosResponse<ApiassetsuploadGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 上传图片
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/assets/upload`,
    method: "get",
    params: params,
    ...options,
  })
}

export const AssetsStoreIdimagesFileIdFileNameGet = <
  P extends AssetsStoreIdimagesFileIdFileNameGetRequset,
  T = AxiosResponse<AssetsStoreIdimagesFileIdFileNameGetResponse>
>(
  FileName: any,
  FileId: any,
  StoreId: any,
  params: P,
  options?: any
): Promise<T> => {
  // 图片访问
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/assets/${StoreId}/images/${FileId}/${FileName}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const BiostoresurveyAsPageGet = <
  P extends BiostoresurveyAsPageGetRequset,
  T = AxiosResponse<BiostoresurveyAsPageGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 查询_调查计划)(分页)
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/bio/store/survey?_as_page`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ApistoresurveyIdGet = <
  P extends ApistoresurveyIdGetRequset,
  T = AxiosResponse<ApistoresurveyIdGetResponse>
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  // 查询_调查计划(单个明细)
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/store/survey/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ApistoresurveyIdDelete = <
  P extends ApistoresurveyIdDeleteRequset,
  T = AxiosResponse<ApistoresurveyIdDeleteResponse>
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  // 删除_调查计划
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/store/survey/${Id}`,
    method: "delete",
    params: params,
    ...options,
  })
}

export const BiostoresurveyPost = <
  P extends BiostoresurveyPostRequset,
  T = AxiosResponse<BiostoresurveyPostResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 新建_调查计划
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/bio/store/survey`,
    method: "post",
    data: params,
    ...options,
  })
}

export const ApistoresurveyPut = <
  P extends ApistoresurveyPutRequset,
  T = AxiosResponse<ApistoresurveyPutResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 修改_调查计划
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/store/survey`,
    method: "put",
    data: params,
    ...options,
  })
}

export const ApistoresurveytaskpageGet = <
  P extends ApistoresurveytaskpageGetRequset,
  T = AxiosResponse<ApistoresurveytaskpageGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 查询_区域人员分配(分页)
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/store/surveytask/page`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ApistoresurveytaskIdGet = <
  P extends ApistoresurveytaskIdGetRequset,
  T = AxiosResponse<ApistoresurveytaskIdGetResponse>
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  // 查询_区域人员分配(单个明细)
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/store/surveytask/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const ApistoresurveytaskIdDelete = <
  P extends ApistoresurveytaskIdDeleteRequset,
  T = AxiosResponse<ApistoresurveytaskIdDeleteResponse>
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  // 删除_区域人员分配
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/store/surveytask/${Id}`,
    method: "delete",
    params: params,
    ...options,
  })
}

export const ApistoresurveytaskPost = <
  P extends ApistoresurveytaskPostRequset,
  T = AxiosResponse<ApistoresurveytaskPostResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 新建_区域人员分配
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/store/surveytask`,
    method: "post",
    data: params,
    ...options,
  })
}

export const ApistoresurveytaskPut = <
  P extends ApistoresurveytaskPutRequset,
  T = AxiosResponse<ApistoresurveytaskPutResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 修改_区域人员分配
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/store/surveytask`,
    method: "put",
    data: params,
    ...options,
  })
}

export const ApiregionRegionIdchildrenGet = <
  P extends ApiregionRegionIdchildrenGetRequset,
  T = AxiosResponse<any>
>(
  RegionId: any,
  params: P,
  options?: any
): Promise<T> => {
  // 查询_根据id查询下级区域
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/region/${RegionId}/children`,
    method: "get",
    params: params,
    ...options,
  })
}

export const BioregiontreeGet = <
  P extends BioregiontreeGetRequset,
  T = AxiosResponse<BioregiontreeGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 查询_行政区域(树形)
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/bio/region/tree`,
    method: "get",
    params: params,
    ...options,
  })
}

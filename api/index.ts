import axios, { AxiosResponse } from "axios"
import {
  ApistoresGetRequset,
  ApistoresGetResponse,
  ApistoresPostRequset,
  ApistoresPostResponse,
  ApistoresStoreIdGetRequset,
  ApistoresStoreIdGetResponse,
  ApistoresStoreIdPutRequset,
  ApistoresStoreIdPutResponse,
  ApipointsPointIdGetRequset,
  ApipointsPointIdGetResponse,
  ApistorescountGetRequset,
  ApistorescountGetResponse,
  ApiuserloginPostRequset,
  ApiuserloginPostResponse,
  ApiassetsuploadGetRequset,
  ApiassetsuploadGetResponse,
  AssetsStoreIdimagesFileIdFileNameGetRequset,
  AssetsStoreIdimagesFileIdFileNameGetResponse,
  BiostoresurveyAsPageGetRequset,
  BiostoresurveyAsPageGetResponse,
  ApistoresurveyIdGetRequset,
  ApistoresurveyIdGetResponse,
  ApistoresurveyIdDeleteRequset,
  ApistoresurveyIdDeleteResponse,
  ApistoresurveyPostRequset,
  ApistoresurveyPostResponse,
  ApistoresurveyPutRequset,
  ApistoresurveyPutResponse,
  ApistoresurveytaskpageGetRequset,
  ApistoresurveytaskpageGetResponse,
  ApistoresurveytaskIdGetRequset,
  ApistoresurveytaskIdGetResponse,
  ApistoresurveytaskIdDeleteRequset,
  ApistoresurveytaskIdDeleteResponse,
  ApistoresurveytaskPostRequset,
  ApistoresurveytaskPostResponse,
  ApistoresurveytaskPutRequset,
  ApistoresurveytaskPutResponse,
  ApiregionRegionIdchildrenGetRequset,
  ApiregionRegionIdchildrenGetResponse,
  ApiregiontreeGetRequset,
  ApiregiontreeGetResponse,
} from "./index.define"

export const ApistoresGet = <
  P extends ApistoresGetRequset,
  T extends AxiosResponse<ApistoresGetResponse>
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
  T extends AxiosResponse<ApistoresPostResponse>
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
  T extends AxiosResponse<ApistoresStoreIdGetResponse>
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
ApistoresStoreIdGet('12', {}).then(res => {
  const { data } = res;
  const { signature } = data
  console.log(signature)
})
export const ApistoresStoreIdPut = <
  P extends ApistoresStoreIdPutRequset,
  T extends AxiosResponse<ApistoresStoreIdPutResponse>
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
  T extends AxiosResponse<ApipointsPointIdGetResponse>
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
  T extends AxiosResponse<ApistorescountGetResponse>
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
  P extends ApiuserloginPostRequset,
  T extends AxiosResponse<ApiuserloginPostResponse>
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
  T extends AxiosResponse<ApiassetsuploadGetResponse>
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
  T extends AxiosResponse<AssetsStoreIdimagesFileIdFileNameGetResponse>
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
  T extends AxiosResponse<BiostoresurveyAsPageGetResponse>
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
  T extends AxiosResponse<ApistoresurveyIdGetResponse>
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
  T extends AxiosResponse<ApistoresurveyIdDeleteResponse>
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

export const ApistoresurveyPost = <
  P extends ApistoresurveyPostRequset,
  T extends AxiosResponse<ApistoresurveyPostResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 新建_调查计划
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/store/survey`,
    method: "post",
    data: params,
    ...options,
  })
}

export const ApistoresurveyPut = <
  P extends ApistoresurveyPutRequset,
  T extends AxiosResponse<ApistoresurveyPutResponse>
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
  T extends AxiosResponse<ApistoresurveytaskpageGetResponse>
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
  T extends AxiosResponse<ApistoresurveytaskIdGetResponse>
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
  T extends AxiosResponse<ApistoresurveytaskIdDeleteResponse>
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
  T extends AxiosResponse<ApistoresurveytaskPostResponse>
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
  T extends AxiosResponse<ApistoresurveytaskPutResponse>
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
  T extends AxiosResponse<ApiregionRegionIdchildrenGetResponse>
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

export const ApiregiontreeGet = <
  P extends ApiregiontreeGetRequset,
  T extends AxiosResponse<ApiregiontreeGetResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 查询_行政区域(树形)
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/api/region/tree`,
    method: "get",
    params: params,
    ...options,
  })
}

import axios from "axios"
import {
  Cmsapiv1ActioncategorymenuGetRequset,
  Cmsapiv1ActioncategorymenuGetResponse,
  Cmsapiv1ActionGetRequset,
  Cmsapiv1ActionGetResponse,
  Cmsapiv1ActionPutRequset,
  Cmsapiv1ActionPutResponse,
  Cmsapiv1ActionPostRequset,
  Cmsapiv1ActionPostResponse,
  Cmsapiv1ActionenablePutRequset,
  Cmsapiv1ActionenablePutResponse,
  Cmsapiv1ActionIdGetRequset,
  Cmsapiv1ActionIdGetResponse,
  Cmsapiv1ActionIdDeleteRequset,
  Cmsapiv1ActionIdDeleteResponse,
  Cmsapiv1ArticleGetRequset,
  Cmsapiv1ArticleGetResponse,
  Cmsapiv1ArticlePutRequset,
  Cmsapiv1ArticlePutResponse,
  Cmsapiv1ArticlePostRequset,
  Cmsapiv1ArticlePostResponse,
  Cmsapiv1ArticleenablePutRequset,
  Cmsapiv1ArticleenablePutResponse,
  Cmsapiv1ArticlemarkGetRequset,
  Cmsapiv1ArticlemarkGetResponse,
  Cmsapiv1ArticleIdGetRequset,
  Cmsapiv1ArticleIdGetResponse,
  Cmsapiv1ArticleIdDeleteRequset,
  Cmsapiv1ArticleIdDeleteResponse,
  Cmsapiv1EquipmentmenuGetRequset,
  Cmsapiv1EquipmentmenuGetResponse,
  Cmsapiv1SitemenuGetRequset,
  Cmsapiv1SitemenuGetResponse,
  Configapiv1ApplicationsGetRequset,
  Configapiv1ApplicationsGetResponse,
  Configapiv1ApplicationsPostRequset,
  Configapiv1ApplicationsPostResponse,
  Configapiv1ApplicationsIdPutRequset,
  Configapiv1ApplicationsIdPutResponse,
  Configapiv1ApplicationsIdDeleteRequset,
  Configapiv1ApplicationsIdDeleteResponse,
  Configapiv1ProjectCodeAppCodePropertiesCodeI18NGetRequset,
  Configapiv1ProjectCodeAppCodePropertiesCodeI18NGetResponse,
  Configapiv1ProjectsGetRequset,
  Configapiv1ProjectsGetResponse,
  Configapiv1ProjectsPostRequset,
  Configapiv1ProjectsPostResponse,
  Configapiv1ProjectsIdPutRequset,
  Configapiv1ProjectsIdPutResponse,
  Configapiv1ProjectsIdDeleteRequset,
  Configapiv1ProjectsIdDeleteResponse,
  Configapiv1PropertiesGetRequset,
  Configapiv1PropertiesGetResponse,
  Configapiv1PropertiesPostRequset,
  Configapiv1PropertiesPostResponse,
  Configapiv1Propertiesi18NGetRequset,
  Configapiv1Propertiesi18NGetResponse,
  Configapiv1Propertiesi18NPostRequset,
  Configapiv1Propertiesi18NPostResponse,
  Configapiv1Propertiesi18NIdPutRequset,
  Configapiv1Propertiesi18NIdPutResponse,
  Configapiv1Propertiesi18NIdDeleteRequset,
  Configapiv1Propertiesi18NIdDeleteResponse,
  Configapiv1PropertiesIdPutRequset,
  Configapiv1PropertiesIdPutResponse,
  Configapiv1PropertiesIdDeleteRequset,
  Configapiv1PropertiesIdDeleteResponse,
  Cmsapiv1DifficultylevelmenuGetRequset,
  Cmsapiv1DifficultylevelmenuGetResponse,
  UnauthloginPostRequset,
  UnauthloginPostResponse,
  UnauthpictureCaptchaGetRequset,
  UnauthpictureCaptchaGetResponse,
  Cmsapiv1CoursecategoryGetRequset,
  Cmsapiv1CoursecategoryGetResponse,
  Cmsapiv1CoursecategoryPutRequset,
  Cmsapiv1CoursecategoryPutResponse,
  Cmsapiv1CoursecategoryPostRequset,
  Cmsapiv1CoursecategoryPostResponse,
  Cmsapiv1CoursecategoryenablePutRequset,
  Cmsapiv1CoursecategoryenablePutResponse,
  Cmsapiv1CoursecategorymenuGetRequset,
  Cmsapiv1CoursecategorymenuGetResponse,
  Cmsapiv1CoursecategoryIdGetRequset,
  Cmsapiv1CoursecategoryIdGetResponse,
  Cmsapiv1CoursecategoryIdDeleteRequset,
  Cmsapiv1CoursecategoryIdDeleteResponse,
  Cmsapiv1CourseGetRequset,
  Cmsapiv1CourseGetResponse,
  Cmsapiv1CoursePutRequset,
  Cmsapiv1CoursePutResponse,
  Cmsapiv1CoursePostRequset,
  Cmsapiv1CoursePostResponse,
  Cmsapiv1CourseenablePutRequset,
  Cmsapiv1CourseenablePutResponse,
  Cmsapiv1CourseIdGetRequset,
  Cmsapiv1CourseIdGetResponse,
  Cmsapiv1CourseIdDeleteRequset,
  Cmsapiv1CourseIdDeleteResponse,
  Cmsapiv1CoursesourcemenuGetRequset,
  Cmsapiv1CoursesourcemenuGetResponse,
  Cmsapiv1TrainplanGetRequset,
  Cmsapiv1TrainplanGetResponse,
  Cmsapiv1TrainplanPutRequset,
  Cmsapiv1TrainplanPutResponse,
  Cmsapiv1TrainplanPostRequset,
  Cmsapiv1TrainplanPostResponse,
  Cmsapiv1TrainplanenablePutRequset,
  Cmsapiv1TrainplanenablePutResponse,
  Cmsapiv1TrainplanIdGetRequset,
  Cmsapiv1TrainplanIdGetResponse,
  Cmsapiv1TrainplanIdDeleteRequset,
  Cmsapiv1TrainplanIdDeleteResponse,
  Cmsapiv1ResourcesGetRequset,
  Cmsapiv1ResourcesGetResponse,
  Cmsapiv1ResourcesPutRequset,
  Cmsapiv1ResourcesPutResponse,
  Cmsapiv1ResourcesPostRequset,
  Cmsapiv1ResourcesPostResponse,
  Cmsapiv1ResourcesIdGetRequset,
  Cmsapiv1ResourcesIdGetResponse,
  Cmsapiv1ResourcesIdDeleteRequset,
  Cmsapiv1ResourcesIdDeleteResponse,
  Cmsapiv1ResourcesdescriptionGetRequset,
  Cmsapiv1ResourcesdescriptionGetResponse,
} from "./index.define"

export const Cmsapiv1ActioncategorymenuGet = <
  P extends Cmsapiv1ActioncategorymenuGetRequset,
  T extends Cmsapiv1ActioncategorymenuGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/action/category/menu`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ActionGet = <
  P extends Cmsapiv1ActionGetRequset,
  T extends Cmsapiv1ActionGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/action`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ActionPut = <
  P extends Cmsapiv1ActionPutRequset,
  T extends Cmsapiv1ActionPutResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/action`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ActionPost = <
  P extends Cmsapiv1ActionPostRequset,
  T extends Cmsapiv1ActionPostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/action`,
    method: "post",
    data: params,
    ...options,
  })
}

export const Cmsapiv1ActionenablePut = <
  P extends Cmsapiv1ActionenablePutRequset,
  T extends Cmsapiv1ActionenablePutResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/action/enable`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ActionIdGet = <
  P extends Cmsapiv1ActionIdGetRequset,
  T extends Cmsapiv1ActionIdGetResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/action/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ActionIdDelete = <
  P extends Cmsapiv1ActionIdDeleteRequset,
  T extends Cmsapiv1ActionIdDeleteResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/action/${Id}`,
    method: "delete",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ArticleGet = <
  P extends Cmsapiv1ArticleGetRequset,
  T extends Cmsapiv1ArticleGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/article`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ArticlePut = <
  P extends Cmsapiv1ArticlePutRequset,
  T extends Cmsapiv1ArticlePutResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/article`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ArticlePost = <
  P extends Cmsapiv1ArticlePostRequset,
  T extends Cmsapiv1ArticlePostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/article`,
    method: "post",
    data: params,
    ...options,
  })
}

export const Cmsapiv1ArticleenablePut = <
  P extends Cmsapiv1ArticleenablePutRequset,
  T extends Cmsapiv1ArticleenablePutResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/article/enable`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ArticlemarkGet = <
  P extends Cmsapiv1ArticlemarkGetRequset,
  T extends Cmsapiv1ArticlemarkGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/article/mark`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ArticleIdGet = <
  P extends Cmsapiv1ArticleIdGetRequset,
  T extends Cmsapiv1ArticleIdGetResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/article/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ArticleIdDelete = <
  P extends Cmsapiv1ArticleIdDeleteRequset,
  T extends Cmsapiv1ArticleIdDeleteResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/article/${Id}`,
    method: "delete",
    params: params,
    ...options,
  })
}

export const Cmsapiv1EquipmentmenuGet = <
  P extends Cmsapiv1EquipmentmenuGetRequset,
  T extends Cmsapiv1EquipmentmenuGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/equipment/menu`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1SitemenuGet = <
  P extends Cmsapiv1SitemenuGetRequset,
  T extends Cmsapiv1SitemenuGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/site/menu`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Configapiv1ApplicationsGet = <
  P extends Configapiv1ApplicationsGetRequset,
  T extends Configapiv1ApplicationsGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/applications`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Configapiv1ApplicationsPost = <
  P extends Configapiv1ApplicationsPostRequset,
  T extends Configapiv1ApplicationsPostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/applications`,
    method: "post",
    data: params,
    ...options,
  })
}

export const Configapiv1ApplicationsIdPut = <
  P extends Configapiv1ApplicationsIdPutRequset,
  T extends Configapiv1ApplicationsIdPutResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/applications/${Id}`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Configapiv1ApplicationsIdDelete = <
  P extends Configapiv1ApplicationsIdDeleteRequset,
  T extends Configapiv1ApplicationsIdDeleteResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/applications/${Id}`,
    method: "delete",
    params: params,
    ...options,
  })
}

export const Configapiv1ProjectCodeAppCodePropertiesCodeI18NGet = <
  P extends Configapiv1ProjectCodeAppCodePropertiesCodeI18NGetRequset,
  T extends Configapiv1ProjectCodeAppCodePropertiesCodeI18NGetResponse
>(
  I18N: any,
  PropertiesCode: any,
  AppCode: any,
  ProjectCode: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/${ProjectCode}/${AppCode}/${PropertiesCode}/${I18N}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Configapiv1ProjectsGet = <
  P extends Configapiv1ProjectsGetRequset,
  T extends Configapiv1ProjectsGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/projects`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Configapiv1ProjectsPost = <
  P extends Configapiv1ProjectsPostRequset,
  T extends Configapiv1ProjectsPostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/projects`,
    method: "post",
    data: params,
    ...options,
  })
}

export const Configapiv1ProjectsIdPut = <
  P extends Configapiv1ProjectsIdPutRequset,
  T extends Configapiv1ProjectsIdPutResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/projects/${Id}`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Configapiv1ProjectsIdDelete = <
  P extends Configapiv1ProjectsIdDeleteRequset,
  T extends Configapiv1ProjectsIdDeleteResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/projects/${Id}`,
    method: "delete",
    params: params,
    ...options,
  })
}

export const Configapiv1PropertiesGet = <
  P extends Configapiv1PropertiesGetRequset,
  T extends Configapiv1PropertiesGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/properties`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Configapiv1PropertiesPost = <
  P extends Configapiv1PropertiesPostRequset,
  T extends Configapiv1PropertiesPostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/properties`,
    method: "post",
    data: params,
    ...options,
  })
}

export const Configapiv1Propertiesi18NGet = <
  P extends Configapiv1Propertiesi18NGetRequset,
  T extends Configapiv1Propertiesi18NGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/properties/i18n`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Configapiv1Propertiesi18NPost = <
  P extends Configapiv1Propertiesi18NPostRequset,
  T extends Configapiv1Propertiesi18NPostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/properties/i18n`,
    method: "post",
    data: params,
    ...options,
  })
}

export const Configapiv1Propertiesi18NIdPut = <
  P extends Configapiv1Propertiesi18NIdPutRequset,
  T extends Configapiv1Propertiesi18NIdPutResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/properties/i18n/${Id}`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Configapiv1Propertiesi18NIdDelete = <
  P extends Configapiv1Propertiesi18NIdDeleteRequset,
  T extends Configapiv1Propertiesi18NIdDeleteResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/properties/i18n/${Id}`,
    method: "delete",
    params: params,
    ...options,
  })
}

export const Configapiv1PropertiesIdPut = <
  P extends Configapiv1PropertiesIdPutRequset,
  T extends Configapiv1PropertiesIdPutResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/properties/${Id}`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Configapiv1PropertiesIdDelete = <
  P extends Configapiv1PropertiesIdDeleteRequset,
  T extends Configapiv1PropertiesIdDeleteResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/config/api/v1/properties/${Id}`,
    method: "delete",
    params: params,
    ...options,
  })
}

export const Cmsapiv1DifficultylevelmenuGet = <
  P extends Cmsapiv1DifficultylevelmenuGetRequset,
  T extends Cmsapiv1DifficultylevelmenuGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/difficulty/level/menu`,
    method: "get",
    params: params,
    ...options,
  })
}

export const UnauthloginPost = <
  P extends UnauthloginPostRequset,
  T extends UnauthloginPostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/unauth/login`,
    method: "post",
    data: params,
    ...options,
  })
}

export const UnauthpictureCaptchaGet = <
  P extends UnauthpictureCaptchaGetRequset,
  T extends UnauthpictureCaptchaGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/unauth/pictureCaptcha`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1CoursecategoryGet = <
  P extends Cmsapiv1CoursecategoryGetRequset,
  T extends Cmsapiv1CoursecategoryGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course/category`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1CoursecategoryPut = <
  P extends Cmsapiv1CoursecategoryPutRequset,
  T extends Cmsapiv1CoursecategoryPutResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course/category`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Cmsapiv1CoursecategoryPost = <
  P extends Cmsapiv1CoursecategoryPostRequset,
  T extends Cmsapiv1CoursecategoryPostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course/category`,
    method: "post",
    data: params,
    ...options,
  })
}

export const Cmsapiv1CoursecategoryenablePut = <
  P extends Cmsapiv1CoursecategoryenablePutRequset,
  T extends Cmsapiv1CoursecategoryenablePutResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course/category/enable`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Cmsapiv1CoursecategorymenuGet = <
  P extends Cmsapiv1CoursecategorymenuGetRequset,
  T extends Cmsapiv1CoursecategorymenuGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course/category/menu`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1CoursecategoryIdGet = <
  P extends Cmsapiv1CoursecategoryIdGetRequset,
  T extends Cmsapiv1CoursecategoryIdGetResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course/category/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1CoursecategoryIdDelete = <
  P extends Cmsapiv1CoursecategoryIdDeleteRequset,
  T extends Cmsapiv1CoursecategoryIdDeleteResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course/category/${Id}`,
    method: "delete",
    params: params,
    ...options,
  })
}

export const Cmsapiv1CourseGet = <
  P extends Cmsapiv1CourseGetRequset,
  T extends Cmsapiv1CourseGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1CoursePut = <
  P extends Cmsapiv1CoursePutRequset,
  T extends Cmsapiv1CoursePutResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Cmsapiv1CoursePost = <
  P extends Cmsapiv1CoursePostRequset,
  T extends Cmsapiv1CoursePostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course`,
    method: "post",
    data: params,
    ...options,
  })
}

export const Cmsapiv1CourseenablePut = <
  P extends Cmsapiv1CourseenablePutRequset,
  T extends Cmsapiv1CourseenablePutResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course/enable`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Cmsapiv1CourseIdGet = <
  P extends Cmsapiv1CourseIdGetRequset,
  T extends Cmsapiv1CourseIdGetResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1CourseIdDelete = <
  P extends Cmsapiv1CourseIdDeleteRequset,
  T extends Cmsapiv1CourseIdDeleteResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course/${Id}`,
    method: "delete",
    params: params,
    ...options,
  })
}

export const Cmsapiv1CoursesourcemenuGet = <
  P extends Cmsapiv1CoursesourcemenuGetRequset,
  T extends Cmsapiv1CoursesourcemenuGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/course/source/menu`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1TrainplanGet = <
  P extends Cmsapiv1TrainplanGetRequset,
  T extends Cmsapiv1TrainplanGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/train/plan`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1TrainplanPut = <
  P extends Cmsapiv1TrainplanPutRequset,
  T extends Cmsapiv1TrainplanPutResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/train/plan`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Cmsapiv1TrainplanPost = <
  P extends Cmsapiv1TrainplanPostRequset,
  T extends Cmsapiv1TrainplanPostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/train/plan`,
    method: "post",
    data: params,
    ...options,
  })
}

export const Cmsapiv1TrainplanenablePut = <
  P extends Cmsapiv1TrainplanenablePutRequset,
  T extends Cmsapiv1TrainplanenablePutResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/train/plan/enable`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Cmsapiv1TrainplanIdGet = <
  P extends Cmsapiv1TrainplanIdGetRequset,
  T extends Cmsapiv1TrainplanIdGetResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/train/plan/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1TrainplanIdDelete = <
  P extends Cmsapiv1TrainplanIdDeleteRequset,
  T extends Cmsapiv1TrainplanIdDeleteResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/train/plan/${Id}`,
    method: "delete",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ResourcesGet = <
  P extends Cmsapiv1ResourcesGetRequset,
  T extends Cmsapiv1ResourcesGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/resources`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ResourcesPut = <
  P extends Cmsapiv1ResourcesPutRequset,
  T extends Cmsapiv1ResourcesPutResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/resources`,
    method: "put",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ResourcesPost = <
  P extends Cmsapiv1ResourcesPostRequset,
  T extends Cmsapiv1ResourcesPostResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/resources`,
    method: "post",
    data: params,
    ...options,
  })
}

export const Cmsapiv1ResourcesIdGet = <
  P extends Cmsapiv1ResourcesIdGetRequset,
  T extends Cmsapiv1ResourcesIdGetResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/resources/${Id}`,
    method: "get",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ResourcesIdDelete = <
  P extends Cmsapiv1ResourcesIdDeleteRequset,
  T extends Cmsapiv1ResourcesIdDeleteResponse
>(
  Id: any,
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/resources/${Id}`,
    method: "delete",
    params: params,
    ...options,
  })
}

export const Cmsapiv1ResourcesdescriptionGet = <
  P extends Cmsapiv1ResourcesdescriptionGetRequset,
  T extends Cmsapiv1ResourcesdescriptionGetResponse
>(
  params: P,
  options?: any
): Promise<T> => {
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/cms/api/v1/resources/description`,
    method: "get",
    params: params,
    ...options,
  })
}

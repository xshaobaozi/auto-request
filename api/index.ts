import axios, { AxiosResponse } from "axios"
import {
  MemberIdKeypathGetResponse,
  MemberIdKeypathGetResponseAddress,
  MemberIdKeypathGetResponseInfo,
  MemberIdKeypathGetRequset,
  MemberupdatePostResponse,
  MemberupdatePostResponseAddress,
  MemberupdatePostResponseInfo,
  MemberupdatePostRequset,
} from "./index.define"

export const MemberIdKeypathGet = <
  P extends MemberIdKeypathGetRequset,
  T = AxiosResponse<MemberIdKeypathGetResponse>
>(
  IdKey: any,
  params: P,
  options?: any
): Promise<T> => {
  // 多层级
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/member/${IdKey}/path`,
    method: "get",
    params: params,
    ...options,
  })
}

export const MemberupdatePost = <
  P extends MemberupdatePostRequset,
  T = AxiosResponse<MemberupdatePostResponse>
>(
  params: P,
  options?: any
): Promise<T> => {
  // 多层级_post
  return axios.request({
    url: `https://yapi.yashili.com/mock/178/member/update`,
    method: "post",
    data: params,
    ...options,
  })
}

import Taro, { RequestTask } from "@tarojs/taro"
import {
  MemberIdKeypathGetResponse,
  MemberIdKeypathGetResponseAddress,
  MemberIdKeypathGetResponseInfo,
  MemberIdKeypathGetResponseInfoBody,
  MemberIdKeypathGetRequset,
  MemberupdatePostResponse,
  MemberupdatePostResponseAddress,
  MemberupdatePostResponseInfo,
  MemberupdatePostResponseInfoBody,
  MemberupdatePostRequset,
} from "./index.define"

export const MemberIdKeypathGet = <
  P extends MemberIdKeypathGetRequset,
  T = MemberIdKeypathGetResponse
>(
  IdKey: any,
  params: P,
  options?: any
): RequestTask<T> => {
  // 多层级
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/aa//member/${IdKey}/path`,
    method: "get",
    data: params,
    ...options,
  })
}

export const MemberupdatePost = <
  P extends MemberupdatePostRequset,
  T = MemberupdatePostResponse
>(
  params: P,
  options?: any
): RequestTask<T> => {
  // 多层级_post
  return Taro.request({
    url: `https://yapi.yashili.com/mock/178/aa//member/update`,
    method: "post",
    data: params,
    ...options,
  })
}

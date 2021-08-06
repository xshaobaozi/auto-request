/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Api {
  ApiverificationsGetParams?: ApiverificationsGetParams;
  ApiverificationsGetResponse?: ApiverificationsGetResponse;
  ApicontestantPostParams?: ApicontestantPostParams;
  ApicontestantPostResponse?: ApicontestantPostResponse;
  ApipersonGetParams?: ApipersonGetParams;
  ApipersonGetResponse?: ApipersonGetResponse;
  ApiloginPostParams?: ApiloginPostParams;
  ApiloginPostResponse?: ApiloginPostResponse;
  [k: string]: unknown;
}
export interface ApiverificationsGetParams {
  /**
   * 手机号码
   */
  mobile: string;
  [k: string]: unknown;
}
export interface ApiverificationsGetResponse {
  [k: string]: unknown;
}
export interface ApicontestantPostParams {
  /**
   * 工号（没有可为空）
   */
  code: string;
  /**
   * 名字
   */
  name: string;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * 事业部
   */
  business_unit: string;
  /**
   * 抖音号
   */
  tiktok_id: string;
  /**
   * 小红书号
   */
  red_booklet_id: string;
  [k: string]: unknown;
}
export interface ApicontestantPostResponse {
  [k: string]: unknown;
}
export interface ApipersonGetParams {
  /**
   * 手机号码
   */
  mobile: string;
  [k: string]: unknown;
}
export interface ApipersonGetResponse {
  [k: string]: unknown;
}
export interface ApiloginPostParams {
  /**
   * 手机号码
   */
  mobile: string;
  /**
   * 验证码
   */
  code: string;
  [k: string]: unknown;
}
export interface ApiloginPostResponse {
  [k: string]: unknown;
}

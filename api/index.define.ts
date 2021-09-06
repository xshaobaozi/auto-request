/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Api {
  DictsDictIditemsGetRequset?: DictsDictIditemsGetRequset;
  DictsDictCodeitemsByCodeGetRequset?: DictsDictCodeitemsByCodeGetRequset;
  DictsGetRequset?: DictsGetRequset;
  DivisionsIdGetResponse?: DivisionsIdGetResponse;
  DivisionsIdGetRequset?: DivisionsIdGetRequset;
  DivisionsGetResponse?: DivisionsGetResponse;
  DivisionsGetRequset?: DivisionsGetRequset;
  OrganizationsGetRequset?: OrganizationsGetRequset;
  ProductsGetRequset?: ProductsGetRequset;
  ShopsGetRequset?: ShopsGetRequset;
  ShopsIdGetResponse?: ShopsIdGetResponse;
  ShopsIdGetResponseBaseInfo?: ShopsIdGetResponseBaseInfo;
  ShopsIdGetResponseMemberInfo?: ShopsIdGetResponseMemberInfo;
  ShopsIdGetResponseSalesData?: ShopsIdGetResponseSalesData;
  ShopsIdGetResponseActivityInfo?: ShopsIdGetResponseActivityInfo;
  ShopsIdGetRequset?: ShopsIdGetRequset;
  VisitsummaryEmployeeIdGetResponse?: VisitsummaryEmployeeIdGetResponse;
  VisitsummaryEmployeeIdGetRequset?: VisitsummaryEmployeeIdGetRequset;
  VisitdetialsEmployeeIdAsPageGetResponse?: VisitdetialsEmployeeIdAsPageGetResponse;
  VisitdetialsEmployeeIdAsPageGetResponseRecords?: VisitdetialsEmployeeIdAsPageGetResponseRecords1;
  VisitdetialsEmployeeIdAsPageGetRequset?: VisitdetialsEmployeeIdAsPageGetRequset;
  VisitorganizationstatisticsGetRequset?: VisitorganizationstatisticsGetRequset;
  VisitemployeestatisticsGetResponse?: VisitemployeestatisticsGetResponse;
  VisitemployeestatisticsGetResponseEmployeeStatisticsList?: VisitemployeestatisticsGetResponseEmployeeStatisticsList1;
  VisitemployeestatisticsGetRequset?: VisitemployeestatisticsGetRequset;
}
export interface DictsDictIditemsGetRequset {}
export interface DictsDictCodeitemsByCodeGetRequset {}
export interface DictsGetRequset {
  /**
   * 编码
   */
  code?: string;
  /**
   * 名称
   */
  text?: string;
  /**
   * 状态
   */
  status?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 删除？
   */
  deleted?: string;
}
export interface DivisionsIdGetResponse {
  /**
   * 行政区ID
   */
  id?: number;
  /**
   * 行政区编码
   */
  code?: string;
  /**
   * 行政区名称
   */
  displayname?: string;
  /**
   * 简称
   */
  shortname?: string;
  /**
   * 全称
   */
  fullname?: string;
  /**
   * 别名
   */
  alias?: string;
  /**
   * 行政区父Id
   */
  parentId?: number;
  /**
   * 层级
   */
  hierarchy?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * 排位
   */
  rank?: number;
  /**
   * 状态
   */
  status?: 10 | 20;
  /**
   * 经度
   */
  lng?: number;
  /**
   * 纬度
   */
  lat?: number;
  /**
   * 描述
   */
  description?: string;
  /**
   * 祖先
   */
  ancestors?: string;
  /**
   * 深度
   */
  depth?: number;
  /**
   * 叶子
   */
  terminal?: boolean;
}
export interface DivisionsIdGetRequset {}
export interface DivisionsGetResponse {
  /**
   * 行政区ID
   */
  id?: number;
  /**
   * 行政区编码
   */
  code?: string;
  /**
   * 行政区名称
   */
  displayname?: string;
  /**
   * 行政区父Id
   */
  parentId?: number;
  /**
   * 层级
   */
  hierarchy?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * 排位
   */
  rank?: number;
  /**
   * 状态
   */
  status?: 10 | 20;
}
export interface DivisionsGetRequset {
  /**
   * 行政区编码
   */
  code?: string;
  /**
   * 行政区父Id
   */
  parentId?: string;
  /**
   * 行政区名称
   */
  displayname?: string;
}
export interface OrganizationsGetRequset {
  /**
   * 销售组织编码
   */
  code: string;
  /**
   * 是否包含所有子节点（0-否；1-是）
   */
  includeChild: string;
}
export interface ProductsGetRequset {}
export interface ShopsGetRequset {
  /**
   * 门店名称.模糊匹配.
   */
  name?: string;
  /**
   * 经度
   */
  lng: string;
  /**
   * 纬度
   */
  lat: string;
  /**
   * 缩放距离
   */
  distance: string;
  /**
   * 门店等级列表  10:A, 20:B, 30:C, 40:D .多值以英文逗号分隔.
   */
  levels?: string;
  /**
   * 告警类型列表. 多值以英文逗号分隔.
   */
  alarmStatuses?: string;
}
export interface ShopsIdGetResponse {
  /**
   * 门店基本信息
   */
  baseInfo?: {
    /**
     * 门店ID
     */
    id: number;
    /**
     * 门店编码
     */
    code: string;
    /**
     * 门店名称
     */
    name: string;
    /**
     * 省份编码
     */
    provinceCode: string;
    /**
     * 省份
     */
    province: string;
    /**
     * 城市编码
     */
    cityCode: string;
    /**
     * 城市
     */
    city: string;
    /**
     * 区县编码
     */
    areaCode: string;
    /**
     * 区县
     */
    area: string;
    /**
     * 详细地址
     */
    address: string;
    /**
     * 门店等级。10:A, 20:B, 30:C, 40:D
     */
    level: number;
    /**
     * 合作时间
     */
    effectiveDate: string;
    /**
     * 关联经理员工编码
     */
    employeeCode: string;
    /**
     * 关联经理员工姓名
     */
    employeeName: string;
    /**
     * 导购员
     */
    shoppingGuide: string;
    /**
     * 导购员电话
     */
    shoppingGuidePhone: string;
    [k: string]: unknown;
  };
  /**
   * 会员信息
   */
  memberInfo?: {
    /**
     * 当月新客数
     */
    monthNewMemberNum: number;
    /**
     * 年累计新客数
     */
    yearNewMemberNum: number;
    [k: string]: unknown;
  };
  /**
   * 销售数据
   */
  salesData?: {
    /**
     * 月销售数据
     */
    montSalesData: {
      /**
       * 总数
       */
      totalNum: number;
      /**
       * 总金额
       */
      totalAmount: number;
      /**
       * 产品销售数据列表
       */
      productSalesDataList: {
        /**
         * 产品编码
         */
        productCode: string;
        /**
         * 产品名称
         */
        productName: string;
        /**
         * 总数
         */
        totalNum: number;
        /**
         * 总金额
         */
        totalAmount: number;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * 年销售数据
     */
    yearSalesData: {
      /**
       * 总数
       */
      totalNum: number;
      /**
       * 总金额
       */
      totalAmount: number;
      /**
       * 产品销售数据列表
       */
      productSalesDataList: {
        /**
         * 产品编码
         */
        productCode: string;
        /**
         * 产品名称
         */
        productName: string;
        /**
         * 总数
         */
        totalNum: string;
        /**
         * 总金额
         */
        totalAmount: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * 活动信息
   */
  activityInfo?: {
    /**
     * 年累计活动数
     */
    yearActivityNum: string;
    /**
     * 活动列表
     */
    activityList: {
      /**
       * 活动名称
       */
      activityName: string;
      /**
       * 开始时间
       */
      startTime: string;
      /**
       * 结束时间
       */
      endTime: string;
      /**
       * 是否为当月活动，1为当月活动，0为上个月活动
       */
      currentMonthActivity: number;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
}
export interface ShopsIdGetResponseBaseInfo {
  /**
   * 门店ID
   */
  id?: number;
  /**
   * 门店编码
   */
  code?: string;
  /**
   * 门店名称
   */
  name?: string;
  /**
   * 省份编码
   */
  provinceCode?: string;
  /**
   * 省份
   */
  province?: string;
  /**
   * 城市编码
   */
  cityCode?: string;
  /**
   * 城市
   */
  city?: string;
  /**
   * 区县编码
   */
  areaCode?: string;
  /**
   * 区县
   */
  area?: string;
  /**
   * 详细地址
   */
  address?: string;
  /**
   * 门店等级。10:A, 20:B, 30:C, 40:D
   */
  level?: number;
  /**
   * 合作时间
   */
  effectiveDate?: string;
  /**
   * 关联经理员工编码
   */
  employeeCode?: string;
  /**
   * 关联经理员工姓名
   */
  employeeName?: string;
  /**
   * 导购员
   */
  shoppingGuide?: string;
  /**
   * 导购员电话
   */
  shoppingGuidePhone?: string;
}
export interface ShopsIdGetResponseMemberInfo {
  /**
   * 当月新客数
   */
  monthNewMemberNum?: number;
  /**
   * 年累计新客数
   */
  yearNewMemberNum?: number;
}
export interface ShopsIdGetResponseSalesData {
  /**
   * 月销售数据
   */
  montSalesData?: {
    /**
     * 总数
     */
    totalNum: number;
    /**
     * 总金额
     */
    totalAmount: number;
    /**
     * 产品销售数据列表
     */
    productSalesDataList: {
      /**
       * 产品编码
       */
      productCode: string;
      /**
       * 产品名称
       */
      productName: string;
      /**
       * 总数
       */
      totalNum: number;
      /**
       * 总金额
       */
      totalAmount: number;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  /**
   * 年销售数据
   */
  yearSalesData?: {
    /**
     * 总数
     */
    totalNum: number;
    /**
     * 总金额
     */
    totalAmount: number;
    /**
     * 产品销售数据列表
     */
    productSalesDataList: {
      /**
       * 产品编码
       */
      productCode: string;
      /**
       * 产品名称
       */
      productName: string;
      /**
       * 总数
       */
      totalNum: string;
      /**
       * 总金额
       */
      totalAmount: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
}
export interface ShopsIdGetResponseActivityInfo {
  /**
   * 年累计活动数
   */
  yearActivityNum?: string;
  /**
   * 活动列表
   */
  activityList?: {
    /**
     * 活动名称
     */
    activityName: string;
    /**
     * 开始时间
     */
    startTime: string;
    /**
     * 结束时间
     */
    endTime: string;
    /**
     * 是否为当月活动，1为当月活动，0为上个月活动
     */
    currentMonthActivity: number;
    [k: string]: unknown;
  }[];
}
export interface ShopsIdGetRequset {}
export interface VisitsummaryEmployeeIdGetResponse {
  /**
   * 员工编号
   */
  employeeCode?: string;
  /**
   * 员工名字
   */
  employeeName?: string;
  /**
   * 目标数
   */
  targetNumber?: number;
  /**
   * 拜访数
   */
  visitNumber?: number;
  /**
   * 完成率
   */
  completionRate?: number;
}
export interface VisitsummaryEmployeeIdGetRequset {
  /**
   * 年
   */
  year: string;
  /**
   * 月
   */
  month: string;
  /**
   * 客户类别 10:门店, 20:经销商
   */
  customerCategory: string;
}
export interface VisitdetialsEmployeeIdAsPageGetResponse {
  /**
   * 每页数量
   */
  size?: number;
  /**
   * 当前页码
   */
  current?: number;
  /**
   * 总页数
   */
  pages?: number;
  /**
   * 总数量
   */
  total?: number;
  /**
   * 字典列表
   */
  records?: VisitdetialsEmployeeIdAsPageGetResponseRecords[];
}
export interface VisitdetialsEmployeeIdAsPageGetResponseRecords {
  /**
   * 员工ID
   */
  employeeId: number;
  /**
   * 客户ID
   */
  customerId: number;
  /**
   * 客户编码
   */
  customerCode: string;
  /**
   * 客户名称
   */
  customerName: string;
  /**
   * 客户类别 10:门店, 20:经销商
   */
  customerCategory: string;
  /**
   * 拜访日期
   */
  visitDate: string;
  /**
   * 拜访时间
   */
  startTime: string;
  /**
   * 离店时间
   */
  endTime: string;
}
export interface VisitdetialsEmployeeIdAsPageGetResponseRecords1 {
  /**
   * 员工ID
   */
  employeeId?: number;
  /**
   * 客户ID
   */
  customerId?: number;
  /**
   * 客户编码
   */
  customerCode?: string;
  /**
   * 客户名称
   */
  customerName?: string;
  /**
   * 客户类别 10:门店, 20:经销商
   */
  customerCategory?: string;
  /**
   * 拜访日期
   */
  visitDate?: string;
  /**
   * 拜访时间
   */
  startTime?: string;
  /**
   * 离店时间
   */
  endTime?: string;
}
export interface VisitdetialsEmployeeIdAsPageGetRequset {
  /**
   * 年
   */
  year: string;
  /**
   * 月
   */
  month: string;
  /**
   * 客户类别 10:门店, 20:经销商
   */
  customerCategory: string;
}
export interface VisitorganizationstatisticsGetRequset {
  /**
   * 年
   */
  year: string;
  /**
   * 月
   */
  month: string;
  /**
   * 销售组织编码
   */
  code: string;
  /**
   * 销售组织层级
   */
  hierarchy: string;
  /**
   * 客户类别 10:门店, 20:经销商
   */
  customerCategory: string;
}
export interface VisitemployeestatisticsGetResponse {
  /**
   * 销售组织编码
   */
  code?: string;
  /**
   * 销售组织名称
   */
  name?: string;
  /**
   * 销售组织层级
   */
  hierarchy?: number;
  /**
   * 目标数
   */
  targetNumber?: number;
  /**
   * 拜访数
   */
  visitNumber?: number;
  /**
   * 完成率
   */
  completionRate?: number;
  /**
   * 员工拜访统计列表
   */
  employeeStatisticsList?: VisitemployeestatisticsGetResponseEmployeeStatisticsList[];
}
/**
 * 员工拜访统计
 */
export interface VisitemployeestatisticsGetResponseEmployeeStatisticsList {
  /**
   * 员工编码
   */
  employeeCode: string;
  /**
   * 员工姓名
   */
  employeeName: string;
  /**
   * 目标数
   */
  targetNumber: number;
  /**
   * 拜访数
   */
  visitNumber: number;
  /**
   * 完成率
   */
  completionRate: number;
  /**
   * 员工ID
   */
  employeeId: string;
}
export interface VisitemployeestatisticsGetResponseEmployeeStatisticsList1 {
  /**
   * 员工编码
   */
  employeeCode?: string;
  /**
   * 员工姓名
   */
  employeeName?: string;
  /**
   * 目标数
   */
  targetNumber?: number;
  /**
   * 拜访数
   */
  visitNumber?: number;
  /**
   * 完成率
   */
  completionRate?: number;
  /**
   * 员工ID
   */
  employeeId?: string;
}
export interface VisitemployeestatisticsGetRequset {
  /**
   * 年
   */
  year: string;
  /**
   * 月
   */
  month: string;
  /**
   * 销售组织编码
   */
  code: string;
  /**
   * 销售组织层级
   */
  hierarchy: string;
  /**
   * 客户类别 10:门店, 20:经销商
   */
  customerCategory: string;
}

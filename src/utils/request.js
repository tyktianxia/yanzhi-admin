// 与后端协商一致后按项目需求配置。
import axios from "axios";
// import vm from "@/main.js";
import qs from "qs";
// import vm from "../main";
// import { initEncryptRequestHeader } from "./utilsFn";
// import getApiUrl from "@/util/api";
// import Vue from "vue";
// const vm3 = new Vue();
// 动态获取域名 无需配置，默认不配置baseURL，就是像自己发出
// const baseUrl = window.location.protocol + "//" + window.location.host + "/";

// 需要取消的接口
// const needCancel = [
//   "queryProductFactor", //查询主险因子
//   "queryMatchProductFactor", //查询附加险因子
//   "newQueryPremium", //算费
//   "getMulPremium", //多被保人算费
//   "getCommissionInfo", //佣金
//   "commisionMaxRateBatch", //佣金
//   "getBenefitData", //受益
// ].map(key => {
//   return getApiUrl(key);
// });

// let cancelCache = [];
// vm3.$on("cancel", () => {
//   cancelCache.forEach(source => {
//     // console.log('取消请求',source.url)
//     source.cancel("取消请求");
//   });
//   cancelCache = [];
// });

// 需要校验参数的接口
const needValidateApis = [
  // 订单详情接口
  {
    apiName: "getOrderDetail",
    errorInfo: "订单主键缺失",
    restful: true, // restful参数校验
  },
  // 暂存单列表接口
  {
    apiName: "tempOrderList",
    errorInfo: "暂存单主键缺失",
    necessaryParam: "salesmanId", // body内必要参数
  },
  // 订单基础信息接口
  {
    apiName: "getBaseOrderInfo",
    errorInfo: "订单基础信息主键缺失",
    restful: true, // restful参数校验
  },
];
/**
 * 接口缺失参数，异常上报
 * @param {String} errorInfo 错误信息
 */
// const callErrorHandler = ({ errorInfo }) => {
//   // errorInfo字符串拼接其他参数
//   let otherObj = {
//     Guuid: vm.$store.state.common.Guuid,
//     fromRouteName: vm.$route.meta.fromRouteName,
//     referrer: document?.referrer,
//     productId: vm.$store.state.calculate?.productDetailInfo?.productMainEntity?.productId,
//   };
//   post(getApiUrl("errorHandler"), {
//     errorInfo: errorInfo + JSON.stringify(otherObj),
//     ...vm.$UA,
//     isInApp: vm.$UA.isInApp ? 1 : 0,
//     location: window?.location?.href ?? "",
//     userId: vm.$store.state.common.userInfo?.id ?? "", // 用户id
//     userName: vm.$store.state.common.userInfo?.name ?? "", // 用户名称
//     saleCode: vm.$store.state.common.userInfo?.saleCode ?? "", // 用户工号
//   });
// };
// 实例即可。
const instance = axios.create({
  // baseURL: baseUrl,
  timeout: 60000, // 超时时间
  headers: {
    "Content-Type": "application/json",
  },
});
// const CancelToken = axios.CancelToken;

// request 请求 拦截器
instance.interceptors.request.use(
  (config) => {
    // 是否需要将该请求加入取消队列
    // needCancel.some(shortApi => {
    //   if (config.url.includes(shortApi)) {
    //     const source = CancelToken.source();
    //     config.cancelToken = source.token;
    //     source.url = config.url;
    //     cancelCache.push(source);
    //     return true; //
    //   }
    // });

    // 校验接口必传参数
    // let vConf;
    // needValidateApis.forEach(x => {
    //   if (config.url.includes(getApiUrl(x.apiName))) {
    //     vConf = x;
    //     return;
    //   }
    // });
    // if (vConf) {
    //   // 1.校验restful
    //   if (vConf.restful) {
    //     // 以数字结尾，判断是否传了主键
    //     if (!/(\d+)$/.test(config.url)) {
    //       callErrorHandler({ errorInfo: vConf.errorInfo });
    //       // 约定code给到response
    //       return Promise.reject(new Error("salespolicyVueLoseParams"));
    //     }
    //   }
    //   // 2.校验body参数
    //   if (vConf.necessaryParam) {
    //     let reqParams = config.method === "get" ? config.params : config.data;
    //     if (!reqParams[vConf.necessaryParam] && reqParams[vConf.necessaryParam] !== 0) {
    //       callErrorHandler({ errorInfo: vConf.errorInfo });
    //       // 约定code给到response
    //       return Promise.reject(new Error("salespolicyVueLoseParams"));
    //     }
    //   }
    // }

    // 发请求前需要做些什么，比如加入往请求头中放一些参数
    // const saleCode = vm.$store.state.common.userInfo.saleCode;
    // const { channelType, platform, uType } = vm.$store.state.common;
    // const encryptParams = initEncryptRequestHeader({ saleCode, channelType });

    config.headers.platform = "platform";
    // config.headers["uType"] = uType;
    // config.headers = { ...config.headers, ...encryptParams };
    // config.headers["mingya-env"] = sessionStorage.getItem("mingya-env");
    // config.headers["fuckdes"] = true; // 后门！！！，不验证参数，用作postman调试

    return config;
  },
  (error) => Promise.reject(error),
);

// 响应 response拦截器  如果非200 。拦截器的两个回调都会走
instance.interceptors.response.use(
  (response) => {
    // 成功的请求需要删掉
    // cancelCache.some((source, index) => {
    //   if (source.url === response.config.url) {
    //     cancelCache.splice(index, 1); //成功的请求，删除
    //     return true;
    //   }
    // });
    if (response.config.url) {
      if ([200, 201].includes(response.status)) {
        // return Promise.resolve(response.data);
        // http请求状态码只认200
        const res = response.data; //  拿到后端返回的数据
        // 给message赋值
        res.message = res.message || res.msg;
        // 实际业务状态码只认 '00000'.
        if (res.code === "00000") {
          // 大部分请求只有正确的返回值。那就是code 00000
          return Promise.resolve(res.data);
        }
        // 不同的状态码并不是常态，其余状态码统一扔try catch处理,这里需要在业务代码中判断状态码
        return Promise.reject(res);
      }
      if ([302, 301].includes(response.status)) {
        return Promise.resolve(response.data);
      }
      // 非200状态码,但是不包括500，500走的error回调
      const mockError = new Error();
      mockError.message = "服务异常";
      return Promise.reject(mockError);
    }
  },
  (error) => {
    // console.log(cancelCache, "这是取消后的请求");
    console.log("请求报错,原生error", error);
    //  返回一个mock的数据错误,可以统一用toast提示
    const mockError = new Error();
    // 判断网络环境
    if (error.message.includes("Network Error")) {
      mockError.msg = "Network Error：网络环境异常!";
    } else if (error.message.includes("timeout")) {
      mockError.msg = "timeout：请求超时，请稍后再试！";
    } else if (error.message.includes("取消请求")) {
      // mockError.msg = "取消请求";
      return Promise.reject(new window.VError("取消请求"));
    } else if (error.message.includes("salespolicyVueLoseParams")) {
      mockError.msg = "必要参数缺失！";
    } else if (error.response) {
      if (error.response.status === 404) {
        // 400 开头。 统一 找不到服务
        mockError.msg = "404：找不到了，请联系管理员！";
      } else if (String(error.response.status).startsWith("5")) {
        // 500开头。统一服务器忙
        mockError.msg = `${error.response.status}：服务器忙，请稍后再试！`;
      }
    } else {
      mockError.msg = "网络异常!";
    }
    mockError.message = mockError.msg;
    return Promise.reject(mockError);
  },
);

// 通用get请求
export function get(url, params = {}) {
  return instance.request({
    url,
    method: "GET",
    params,
  });
}
// post 请求。 application/json
export function post(url, data = {}) {
  return instance.request({
    url,
    method: "POST",
    data,
  });
}

// post 请求。 普通表单请求 'application/x-www-form-urlencoded'
export function form(url, data) {
  return instance.request({
    method: "POST",
    url,
    data: qs.stringify(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
// post 请求。 文件上传 "multipart/form-data";
export function formData(url, data) {
  return instance.request({
    method: "POST",
    url,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

// export { vm3 };
// 看情况可以增加delete patch put

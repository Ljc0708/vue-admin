import Env from "./env";
import axios from "axios";
import { ElMessage } from "element-plus";
//导入Nprogress css和js
// import Nprogress from "nprogress";
// import "nprogress/nprogress.css";
// import Vue from 'vue'
// import {road} from '../road.js'
// import router from '@/router'
// import {
// 	type
// } from 'os';
let token = "";
axios.defaults.withCredentials = true;
// {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.common['token'] = token;
// //
// // 添加一个请求拦截器
axios.interceptors.request.use(
  (config) => {
    // Nprogress.start();
    let user = window.sessionStorage.getItem("token");
    if (user) {
      token = user;
    }
    config.headers.common["Authentication"] = token;
    return config;
  },
  function (error) {
    console.info("error: ");
    console.info(error);
    return Promise.reject(error);
  }
);
//添加一个响应拦截器
axios.interceptors.response.use((response) => {
  if (response.data.status == 207) {
    return ElMessage.error(response.data.message);
  }
  // Nprogress.done();
  return response;
});

// axios.interceptors.response.use(function(response) {
//
// 	if (response.data && response.data.code) {
// 		if (parseInt(response.data.code) === 108 || parseInt(response.data.code) === 109 || response.data.msg ===
// 			'TOKEN失效，请重新登录' || response.data.msg === 'TOKEN不存在') {
// 			//未登录
// 			response.data.msg = "登录信息已失效，请重新登录";
// 			console.log(response.data.msg);
// 			router.replace("/login");
// 		}
// 		if (parseInt(response.data.code) === -1) {
// 			console.log("请求失败");
// 			router.push("/login");
// 		}
// 	}
// 	return response;
// }, function(error) {
// 	// Do something with response error
// 	console.dir(error);
// 	console.log("服务器连接失败");
// 	router.push("/login");
// 	return Promise.reject(error);
// })
//基地址
let base = Env.baseURL;
//测试使用
export const ISDEV = Env.isDev;
//通用方法
export const POST = (url, params) => {
  return axios
    .post(`${url}`, params)
    .then((res) => res.data)
    .catch((err) => err.data);
};
export const GET = (url, params) => {
  return axios
    .get(
      `${url}`,
      {
        //${base}
        params: params,
      },
      { withCredentials: true }
    )
    .then((res) => res.data)
    .catch((err) => err.data);
};
export const PUT = (url, params) => {
  return axios
    .put(`${base}${url}`, params, { withCredentials: true })
    .then((res) => res.data);
};
export const DELETE = (url, params) => {
  return axios
    .delete(
      `${base}${url}`,
      {
        params: params,
      },
      { withCredentials: true }
    )
    .then((res) => res.data);
};
export const PATCH = (url, params) => {
  return axios
    .patch(`${base}${url}`, params, { withCredentials: true })
    .then((res) => res.data);
};

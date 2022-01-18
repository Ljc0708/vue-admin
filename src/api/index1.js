import request from "../utils/request";

export const fetchData = (query) => {
  return request({
    url: "http://192.168.100.112:8081/base/SysMenu/tree/selectRBAC",
    method: "post",
    params: query,
  });
};

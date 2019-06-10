import axios from "axios";
//登录请求函数
export function get(url, data) {
  return axios.get(url, data);
}

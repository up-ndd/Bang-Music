import axios from "axios";
//登录请求函数
export function denglu(url, data) {
      return axios.get(url, data);
}
//轮播图函数
export function lunbo(url, data) {
      return axios.get(url, data);
}

//我喜欢的歌曲列表
export function likemusiclist(url, data) {
      return axios.get(url, data);
}

//我收藏的MV
export function collect(url, data) {
      return axios.get(url, data);
}

//排行榜
export function paihangbang(url, data) {
      return axios.get(url, data)
}

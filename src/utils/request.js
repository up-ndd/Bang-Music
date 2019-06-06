import axios from 'axios'
//登录请求函数
export function denglu(url, data) {
    return axios.get(url, data)
}
//轮播图函数
export function lunbo(url, data) {
    return axios.get(url, data)
}
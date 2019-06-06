//导入函数，然后传入参数再导出
import { denglu, lunbo } from './../utils/request'

//导出登录返回值
export function denglureturn() {
    return denglu('https://miximusic.herokuapp.com/login/cellphone?phone=18639389097&password=xiaofang')
}
//导出轮播图返回值
export function lunboreturn() {
    return lunbo('https://miximusic.herokuapp.com/banner?type=2')
}
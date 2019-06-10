//导入函数，然后传入参数再导出
import { denglu, lunbo, likemusiclist, collect } from "./../utils/request";

//导出登录返回值
export function denglureturn() {
    return denglu(
        "https://miximusic.herokuapp.com/login/cellphone?phone=18639389097&password=xiaofang"
    );
}
//导出轮播图返回值
export function lunboreturn() {
    return lunbo("https://miximusic.herokuapp.com/banner?type=2");
}

//导出我喜欢的音乐列表返回值
export function likelistreturn() {
    return likemusiclist(
        "https://miximusic.herokuapp.com/likelist?uid=32953014"
    );
}

//导出我收藏的MV
export function collectreturn() {
    return collect("https://miximusic.herokuapp.com/mv/sublist");
}

//导出推荐视频数据返回值
export function videoreturn() {
    return videoreturn("https://miximusic.herokuapp.com/mv/first?limit=20");
}
//导出推荐视频数据详情
export function videoDetalreturn() {
    return videoDetalreturn(
        "https://miximusic.herokuapp.com/mv/detail?mvid=10867444"
    );
}

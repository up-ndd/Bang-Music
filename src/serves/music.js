//导入函数，然后传入参数再导出
import { denglu, lunbo, likemusiclist, collect } from "./../utils/request";

//导出登录返回值
export function denglureturn() {
      return denglu(
            "http://10.8.155.18:3000/login/cellphone?phone=18639389097&password=xiaofang"
      );
}
//导出轮播图返回值
export function lunboreturn() {
      return lunbo("http://10.8.155.18:3000/banner?type=2");
}

//导出我喜欢的音乐列表返回值
export function likelistreturn() {
      return likemusiclist(
            "http://10.8.155.18:3000/likelist?uid=32953014"
      );
}

//导出我收藏的MV
export function collectreturn() {
      return collect("http://10.8.155.18:3000/mv/sublist");
}

//导出推荐视频数据返回值
export function videoreturn() {
      return videoreturn("http://10.8.155.18:3000/mv/first?limit=20");
}
//导出推荐视频数据详情
export function videoDetalreturn() {
      return videoDetalreturn(
            "http://10.8.155.18:3000/mv/detail?mvid=10867444"
      );
}

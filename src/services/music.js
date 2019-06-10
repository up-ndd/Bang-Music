//导入函数，然后传入参数再导出
import {
      denglu,
      lunbo,
      likemusiclist,
      collect,
      paihangbang,
      likedatile,
      colloecdatile
} from "./../utils/request";

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
            "http://10.8.155.18:3000/likelist?uid=1553202823"
      );
}

//歌曲详情
export function likedatilereturn(ids) {
      return likedatile("http://10.8.155.18:3000/song/detail?ids=" + ids);
}

//导出我收藏的MV
export function collectreturn() {
      return collect("http://10.8.155.18:3000/mv/sublist");
}

//mv详情
export function colloecdatilereturn(id) {
      return colloecdatile("http://10.8.155.18:3000/mv/detail?mvid=" + id);
}

//导出排行榜返回数据
export function paihangbangreturn() {
      return paihangbang("http://10.8.155.18:3000/top/list?idx=1");
}

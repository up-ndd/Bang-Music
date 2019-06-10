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
    "https://miximusic.herokuapp.com/likelist?uid=1553202823"
  );
}

//歌曲详情
export function likedatilereturn(ids) {
  return likedatile("https://miximusic.herokuapp.com/song/detail?ids=" + ids);
}

//导出我收藏的MV
export function collectreturn() {
  return collect("https://miximusic.herokuapp.com/mv/sublist");
}

//mv详情
export function colloecdatilereturn(id) {
  return colloecdatile("https://miximusic.herokuapp.com/mv/detail?mvid=" + id);
}

//导出排行榜返回数据
export function paihangbangreturn() {
  return paihangbang("https://miximusic.herokuapp.com/top/list?idx=1");
}

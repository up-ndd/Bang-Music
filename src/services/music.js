//导入函数，然后传入参数再导出
import { get } from "./../utils/request";

//导出登录返回值
export function denglureturn() {
  return get(
    "https://miximusic.herokuapp.com/login/cellphone?phone=18639389097&password=xiaofang"
  );
}
//导出轮播图返回值
export function lunboreturn() {
  return get("https://miximusic.herokuapp.com/banner?type=2");
}

//导出我喜欢的音乐列表返回值
export function likelistreturn() {
  return get("https://miximusic.herokuapp.com/likelist?uid=1553202823", {
    withCredentials: true
  });
}

//歌曲详情
export function likedatilereturn(ids) {
  return get("https://miximusic.herokuapp.com/song/detail?ids=" + ids);
}

//导出我收藏的MV
export function collectreturn() {
  return get("https://miximusic.herokuapp.com/mv/sublist", {
    withCredentials: true
  });
}

//mv详情
export function colloecdatilereturn(id) {
  return get("https://miximusic.herokuapp.com/mv/detail?mvid=5436712" + id);
}

//导出排行榜返回数据
export function paihangbangreturn() {
  return get("https://miximusic.herokuapp.com/top/list?idx=1");
}

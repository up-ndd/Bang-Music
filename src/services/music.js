//导入函数，然后传入参数再导出
import { get } from "./../utils/request";

//导出登录返回值
export function denglureturn() {
  return get(
    "http://10.8.155.18:3000/login/cellphone?phone=18639389097&password=xiaofang"
  );
}
//导出轮播图返回值
export function lunboreturn() {
  return get("http://10.8.155.18:3000/banner?type=2");
}

//导出我喜欢的音乐列表返回值
export function likelistreturn() {
  return get("http://10.8.155.18:3000/likelist?uid=1553202823", {
    withCredentials: true
  });
}

//歌曲详情
export function likedatilereturn(id) {
  return get("https://10.8.155.18:3000/song/detail?ids=" + id);
}

//导出我收藏的MV
export function collectreturn() {
  return get("http://10.8.155.18:3000/mv/sublist", {
    withCredentials: true
  });
}

//mv详情
export function colloecdatilereturn(ids) {
  return get("http://10.8.155.18:3000/video/url?id=" + ids);
}

//导出排行榜返回数据
export function paihangbangreturn() {
  return get("http://10.8.155.18:3000/top/list?idx=1");
}

//导出推荐视频数据返回值
export function videoreturn() {
  return videoreturn("http://10.8.155.18:3000/mv/first?limit=20");
}
//导出推荐视频数据详情
export function videoDetalreturn() {
  return videoDetalreturn("http://10.8.155.18:3000/mv/detail?mvid=10867444");
}
//根据歌曲id获取url
export function getmusicurl(id) {
      return get('http://10.8.155.18:3000/song/url?id=' + id)
}

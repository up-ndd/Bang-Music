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

// //歌曲详情
export function likedatilereturn(a) {
  return get("http://10.8.155.18:3000/song/detail?ids=" + a);
}
//歌曲url

export function likedatileurl(id) {
  return get("http://10.8.155.18:3000/song/url?id=" + id);
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
  return get("http://10.8.155.18:3000/mv/first?limit=5");
}
//导出推荐视频数据详情
export function videoDetalreturn(id) {
  return get("http://10.8.155.18:3000/mv/url?id=" + id);
}

//导出最近播放音乐返回值
export function broadcastreturn() {
  return get("http://10.8.155.18:3000/user/record?uid=1553202823&type=1");
}

//导出最近播放歌曲详情
export function broadcastdetal(id) {
  return get("http://10.8.155.18:3000/song/detail?ids=" + id);
}

//导出最近播放音乐详情
export function broadcastdetalreturn(id) {
  return get("http://10.8.155.18:3000/song/url?id=" + id);
}

//根据id获取音乐url，可传多个，逗号隔开
export function getmusicurl(id) {
  return get("http://10.8.155.18:3000/song/url?id=" + id + "&br=320000");
}
//每日推荐歌曲
export function meirituijianreturn() {
  return get("http://10.8.155.18:3000/recommend/songs", {
    withCredentials: true
  });
}
//每日推荐歌单
export function tuijiangedanreturn() {
  return get("http://10.8.155.18:3000/recommend/resource", {
    withCredentials: true
  });
}
//首页热门歌单推荐
export function remengedanreturn() {
  return get("http://10.8.155.18:3000/top/playlist?limit=12");
}
//导出我收藏的歌单信息
export function shoucanggedanreturn() {
  return get("http://10.8.155.18:3000/user/playlist?uid=1553202823");
}

//歌单详情
export function gedanxiangqingreturn(id) {
  return get("http://10.8.155.18:3000/playlist/detail?id=" + id);
}

//搜索接口 获取最终搜索的详情，拿着id调用获取音乐url
export function sousuojiekou(key) {
  return get("http://10.8.155.18:3000/search?keywords=" + key);
}

//搜索建议调用此接口 , 传入搜索关键词可获得搜索建议，搜索结果同时包含单曲，歌手，歌单，mv信息。可选:type传mobile返回移动端数据
export function search(key) {
  return get(
    "http://10.8.155.18:3000/search/suggest?keywords=" + key + "&type=mobile"
  );
}
//收藏/取消收藏歌单  t : 类型,1:收藏,2:取消收藏 id : 歌单 id
export function gedanshoucang(t, id) {
  return get(`http://10.8.155.18:3000/playlist/subscribe?t=${t}&id=${id}`, {
    withCredentials: true
  });
}

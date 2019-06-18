//导入函数，然后传入参数再导出
import { get } from "./../utils/request";

//导出登录返回值
export function denglureturn() {
  return get(
    "https://net-music.penkuoer.com/login/cellphone?phone=18639389097&password=xiaofang"
  );
}
//导出轮播图返回值
export function lunboreturn() {
  return get("https://net-music.penkuoer.com/banner?type=2");
}

//导出我喜欢的音乐列表返回值
export function likelistreturn() {
  return get("https://net-music.penkuoer.com/likelist?uid=1553202823", {
    withCredentials: true
  });
}

// //歌曲详情
export function likedatilereturn(a) {
  return get("https://net-music.penkuoer.com/song/detail?ids=" + a);
}

//歌曲url
export function likedatileurl(id) {
  return get("https://net-music.penkuoer.com/song/url?id=" + id);
}

//导出我收藏的MV
export function collectreturn() {
  return get("https://net-music.penkuoer.com/mv/sublist", {
    withCredentials: true
  });
}

//mv详情
export function colloecdatilereturn(ids) {
  return get("https://net-music.penkuoer.com/video/url?id=" + ids);
}

//导出排行榜返回数据
export function paihangbangreturn() {
  return get("https://net-music.penkuoer.com/top/list?idx=1");
}

//导出推荐视频数据返回值
export function videoreturn() {
  return get("https://net-music.penkuoer.com/mv/first?limit=5");
}
//导出推荐视频数据详情
export function videoDetalreturn(id) {
  return get("https://net-music.penkuoer.com/mv/url?id=" + id);
}

//导出最近播放音乐返回值
export function broadcastreturn() {
  return get("https://net-music.penkuoer.com/user/record?uid=1553202823&type=1");
}

//导出最近播放音乐详情
export function broadcastdetalreturn(id) {
  return get("https://net-music.penkuoer.com/song/url?id=" + id);
}

//根据id获取音乐url，可传多个，逗号隔开
export function getmusicurl(id) {
  return get("https://net-music.penkuoer.com/song/url?id=" + id + "&br=320000");
}
//每日推荐歌曲
export function meirituijianreturn() {
  return get("https://net-music.penkuoer.com/recommend/songs", {
    withCredentials: true
  });
}
//每日推荐歌单
export function tuijiangedanreturn() {
  return get("https://net-music.penkuoer.com/recommend/resource", {
    withCredentials: true
  });
}
//首页热门歌单推荐
export function remengedanreturn() {
  return get("https://net-music.penkuoer.com/top/playlist?limit=12");
}
//导出我收藏的歌单信息
export function shoucanggedanreturn() {
  return get("https://net-music.penkuoer.com/user/playlist?uid=1553202823");
}

//歌单详情
export function gedanxiangqingreturn(id) {
  return get("https://net-music.penkuoer.com/playlist/detail?id=" + id);
}

//多重匹配搜索接口 获取最终搜索的详情，拿着id调用获取音乐url
export function sousuojiekou(key) {
  return get("https://net-music.penkuoer.com/search?keywords=" + key);
}

//搜索建议调用此接口 , 传入搜索关键词可获得搜索建议，搜索结果同时包含单曲，歌手，歌单，mv信息。可选:type传mobile返回移动端数据
export function search(key) {
  return get(
    "https://net-music.penkuoer.com/search/suggest?keywords=" + key + "&type=mobile"
  );
}
//收藏/取消收藏歌单  t : 类型,1:收藏,2:取消收藏 id : 歌单 id
export function gedanshoucang(t, id) {
  return get(`https://net-music.penkuoer.com/playlist/subscribe?t=${t}&id=${id}`, {
    withCredentials: true
  });
}
//喜欢/取消喜欢歌曲
export function likemusicreturn(like, id) {
  return get(`https://net-music.penkuoer.com/like?id=${id}&like=${like}`, {
    withCredentials: true
  });
}
//获取歌曲评论 必选id:音乐id    可选：limit：数量   offset:偏移，相当于第页码n-1
export function musicpinglunreturn(id, limit, offset) {
  return get(
    `https://net-music.penkuoer.com/comment/music?id=${id}&limit=${limit}&offset=${offset}`
  );
}













//歌单评论
export function musiclistpinglunreturn(id, limit, offset) {
      return get(`https://net-music.penkuoer.com/comment/playlist?id=${id}&limit=${limit}&offset=${offset}`)
}
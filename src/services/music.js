//导入函数，然后传入参数再导出
<<<<<<< HEAD:src/serves/music.js
import { denglu, lunbo, likemusiclist, collect, paihangbang } from "./../utils/request";
=======
import {
  denglu,
  lunbo,
  likemusiclist,
  collect,
  likedatile
} from "../utils/request";
>>>>>>> fc0dbbfc255cbb8011d685f22cf300ed80b58c68:src/services/music.js

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
      return likemusiclist("https://miximusic.herokuapp.com/likelist?uid=32953014");
}

//歌曲详情
export function likedatilereturn() {
  return likedatile("https://miximusic.herokuapp.com/song/detail?ids=ids");
}

//导出我收藏的MV
export function collectreturn() {
      return collect("https://miximusic.herokuapp.com/mv/sublist");
}

//导出排行榜返回数据
export function paihangbangreturn() {
      return paihangbang('https://miximusic.herokuapp.com/top/list?idx=1')
}
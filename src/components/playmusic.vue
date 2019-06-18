<template>
  <div class="contentwrap">
    <!-- 背景毛玻璃 -->
    <div class="back" :style="backgroundstyle"></div>
    <!-- 头部返回按键 -->
    <header>
      <van-nav-bar
        title
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
      ></van-nav-bar>
    </header>
    <div class="fixed">
      <!-- 音乐名字 -->
      <p class="musicname">{{playlist[i].name}}</p>
      <!-- 歌手名字 -->
      <p class="geshouname">{{playlist[i].ar[0].name}}</p>
      <!-- 封面图片 -->
      <img :src="fengmianurl" alt class="musicimg" :style="tansform">
      <!-- 已经播放的时间 -->
      <span class="lefttime">{{readytime}}</span>
      <!-- 进度条 -->
      <van-slider v-model="value" :drag-start="startslide()" :drag-end="endslide()"/>
      <!-- 总共需要播放的时间 -->
      <span class="righttime">{{alltime}}</span>
      <!-- 播放控件 -->
      <audio :src="urllist[ip].url" autoplay class="plsyctrl" ref="audio"></audio>
      <!-- 点击播放 -->
      <img src="./../assets/iconset0481.png" class="playctrl" @click="goon" v-if="!zhuangtai">
      <!-- 点击暂停 -->
      <img src="./../assets/pause.png" class="playctrl" @click="wait" v-if="zhuangtai">
      <!-- 上一首 -->
      <img src="./../assets/icon-_1.png" class="prebutton" @click="premusic">
      <!-- 下一首 -->
      <img src="./../assets/icon-.png" class="nextbutton" @click="nextmusic">
      <!-- 评论 -->
      <img src="../assets/pinglun.png" alt class="pinglunbutton" @click="show=true">
      <!-- 评论数 -->
      <span class="pinglunbuttonspan">{{allpingluncount}}</span>
      <!-- 喜欢与取消喜欢 -->
      <img
        src="./../assets/xin.png"
        class="likebutton"
        @click="likemusic(playlist[i].id)"
        v-if="!like"
      >
      <img
        src="./../assets/hongxin.png"
        class="likebutton"
        @click="nolikemosic(playlist[i].id)"
        v-if="like"
      >
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" :overlay="false">
      <!-- 头部 -->
      <header style="background:#fff">
        <van-nav-bar
          title="评论"
          left-text="返回"
          left-arrow
          @click-left="pinglunhiden"
          style="height:100%;line-height:60px;"
        ></van-nav-bar>
      </header>
      <ul class="pinglunul">
        <li class="pinglunli" v-for="(p,i) in pinglunlist" :key="i">
          <div class="uesename">{{p.user.nickname}}：</div>
          <div class="content">{{p.content}}</div>
          <img :src="p.user.avatarUrl" alt class="pingluntouxiang">
        </li>
      </ul>
      <!-- 翻页器 -->
      <van-pagination
        v-model="currentPage"
        :total-items="Math.ceil(allpingluncount/2)"
        :show-page-size="5"
        force-ellipses
        change="pinglunmore"
      />
    </van-popup>
  </div>
</template>
<script>
import {
  getmusicurl,
  likemusicreturn,
  denglureturn,
  likelistreturn,
  musicpinglunreturn
} from "./../services/music";
export default {
  data() {
    return {
      // 播放列表
      playlist: [],
      // 现在在播放列表播放的位置
      i: 0,
      // url列表
      urllist: [],
      // 对应的url在urllist中的位置
      ip: 0,
      //播放控件
      audioctrl: "",
      // 背景模糊图片
      backgroundstyle: {},
      //封面图片
      fengmianurl: "",
      //旋转角度
      deg: 0,
      //图片旋转样式
      tansform: {},
      //旋转计时器
      xuanzhuanjishiqi: "",
      // 总时间  分钟：秒
      alltime: "",
      // 经过时间   分钟：秒
      readytime: "",
      //定时器
      jishiqi: "",
      //经过时间秒数
      timer: 0,
      //播放进度  百分比
      value: 0,
      //播放状态  暂停还是播放
      zhuangtai: true,
      //本首歌是否喜欢
      like: false,
      //喜欢的id列表
      likelist: [],
      // 弹出层
      show: false,
      //评论页码
      currentPage: 1,
      //评论列表
      pinglunlist: [],
      // 总评论数
      allpingluncount: 0
    };
  },
  methods: {
    // 下一首
    nextmusic() {
      if (this.i + 1 == this.playlist.length) {
        this.i = 0;
      } else {
        this.i++;
      }
      // console.log(this.i);
      this.bgimg();
      this.ipupdata();
      this.fengmianupdata();
      if (this.playlist.length != 1) {
        this.zhuangtai = true;
      }
      this.likeornolike();
      this.needtimeupdata();
      // console.log("下一首");
      this.timer = 0;
      this.currentPage = 1;
      this.qingqiupinglun(this.ip);
      this.deg = 0;
    },
    // 上一首
    premusic() {
      if (this.i == 0) {
        this.i = this.playlist.length - 1;
      } else {
        this.i--;
      }
      // console.log(this.i);
      this.bgimg();
      this.ipupdata();
      this.fengmianupdata();
      if (this.playlist.length != 1) {
        this.zhuangtai = true;
      }
      this.likeornolike();
      this.needtimeupdata();
      // console.log("上一首");
      this.timer = 0;
      this.currentPage = 1;
      this.qingqiupinglun(this.ip);
      this.deg = 0;
    },
    //返回
    onClickLeft() {
      clearInterval(this.jishiqi);
      clearInterval(this.xuanzhuanjishiqi);
      window.history.go(-1);
    },
    //总播放时间更新
    needtimeupdata() {
      // console.log("总播放时间更新");
      let needsec = this.playlist[this.i].dt / 1000;
      let min = Math.floor(needsec / 60);
      let sec = Math.round(needsec - min * 60);
      if (sec < 10) {
        sec = "0" + sec;
      }
      this.alltime = min + ":" + sec;
    },
    //已播放时间与进度条
    readytimeupdata() {
      let min = Math.floor(this.timer / 60);
      let sec = Math.round(this.timer - min * 60);
      if (sec < 10) {
        sec = "0" + sec;
      }
      this.readytime = min + ":" + sec;
      this.value = this.timer / (this.playlist[this.i].dt / 1000) * 100;
    },
    //背景图片更新
    bgimg() {
      this.backgroundstyle = {
        background: `url(${
          this.playlist[this.i].al.picUrl
        }) center center no-repeat`
      };
      // console.log("背景图片更新为：");
      // console.log(this.backgroundstyle);
    },
    //封面更新
    fengmianupdata() {
      this.fengmianurl = this.playlist[this.i].al.picUrl;
      // console.log("封面更新为：" + this.fengmianurl);
    },
    //ip更新
    ipupdata() {
      this.ip = this.urllist.findIndex(item => {
        return item.id == this.playlist[this.i].id;
      });
      // console.log("ip更新为：" + this.ip);
    },
    //开始拖动
    startslide() {
      // console.log("开始拖动");
    },
    //结束拖动
    endslide() {
      // console.log("结束拖动");
      // console.log(this.value);
      // this.timer = (this.value / 100) * (this.playlist[this.i].dt / 1000);
      // console.log((this.value / 100) * (this.playlist[this.i].dt / 1000));
      // console.log(this.timer);
      // this.$refs.audio.currentTime = this.timer;
      // this.$refs.audio.currentTime = Math.round(this.timer);
    },
    //判断喜欢状态
    likeornolike() {
      likelistreturn().then(item => {
        this.likelist = item.data.ids;
        // console.log(this.likelist);
        let a = this.likelist.findIndex(item => {
          return item == this.playlist[this.i].id;
        });
        if (a < 0) {
          this.like = false;
        } else {
          this.like = true;
        }
      });
    },
    //点击喜欢
    likemusic(id) {
      denglureturn()
        .then(likemusicreturn(true, id))
        .then((this.like = true));
    },
    //点击取消喜欢
    nolikemosic(id) {
      denglureturn()
        .then(likemusicreturn(false, id))
        .then((this.like = false));
    },
    //点击播放
    goon() {
      // console.log(this.$refs.audio);
      this.$refs.audio.play();
      this.zhuangtai = !this.zhuangtai;
      // console.log("点击了播放");
      this.jishiqi = setInterval(() => {
        this.timer += 1;
        // console.log(this.timer);
        this.readytimeupdata();
      }, 1000);
      this.xuanzhuanjishiqi = setInterval(() => {
        this.deg += 0.72;
        this.tansform = { transform: `rotate3d(0,0,1,${this.deg}deg)` };
      }, 50);
    },
    //点击暂停
    wait() {
      // console.log(this.$refs.audio);
      // this.timer = 200;
      this.$refs.audio.pause();
      this.zhuangtai = !this.zhuangtai;
      // console.log("点击了暂停");
      clearInterval(this.jishiqi);
      clearInterval(this.xuanzhuanjishiqi);
    },
    //评论页隐藏
    pinglunhiden() {
      this.show = false;
    },
    //请求评论
    qingqiupinglun(id) {
      // console.log("请求评论");
      // console.log(this.currentPage);
      musicpinglunreturn(id, 20, (this.currentPage - 1) * 20).then(item => {
        // console.log(item);
        this.allpingluncount = item.data.total;
        this.pinglunlist = item.data.comments;
        // console.log(this.pinglunlist);
      });
    }
  },
  watch: {
    currentPage() {
      // console.log(this.currentPage);
      this.qingqiupinglun(this.playlist[this.i].id);
    },
    i() {
      this.qingqiupinglun(this.playlist[this.i].id);
    }
  },
  async created() {
    this.playlist = this.$route.query.all;
    // console.log(this.playlist);
    this.bgimg(); //请求第一首歌曲背景图片
    this.fengmianupdata(); //请求第一张封面图片
    this.needtimeupdata(); //计算音乐总时间
    let id = ""; //批量请求url需要拼接id
    for (let a = 0; a < this.playlist.length; a++) {
      if (a == 0) {
        id += this.playlist[a].id;
      } else {
        id += "," + this.playlist[a].id;
      }
    }
    //请求音乐url
    getmusicurl(id).then(res => {
      this.urllist = res.data.data;
      // console.log(this.urllist);
      this.ipupdata(); //更新对应url的位置
    });
    this.likeornolike(); //判断是否在喜欢列表
    //开始计时
    this.jishiqi = setInterval(() => {
      this.timer += 1;
      this.readytimeupdata();
    }, 1000);
    // 旋转定时器
    this.xuanzhuanjishiqi = setInterval(() => {
      this.deg += 0.72;
      this.tansform = { transform: `rotate3d(0,0,1,${this.deg}deg)` };
    }, 50);
    //请求第一页评论
    this.qingqiupinglun(this.playlist[0].id);
  }
};
</script>
<style scoped>
/* 弹出层 */
.van-popup {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
/* 分液器 */
.van-pagination {
  background: #fff;
}
.pinglunul {
  padding: 60px 0;
  box-sizing: border-box;
  flex: 1;
  overflow-y: auto;
}
.pinglunli {
  position: relative;
  margin-bottom: 20px;
}
.uesename {
  text-indent: 50px;
  color: #1989fa;
  font-size: 14px;
  line-height: 28px;
}
.content {
  padding: 10px 30px 10px 50px;
  margin: 0 30px;
  box-sizing: border-box;
  font-size: 14px;
  border-bottom: 1px solid #eee;
}
.pingluntouxiang {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 0;
}
/* 播放器 */
.contentwrap {
  margin-top: -60px;
  height: 100%;
  width: 100%;
  position: absolute;
}
.back {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(110, 110, 110, 1);
  background-size: 200% !important;
  -webkit-filter: blur(50px);
  -moz-filter: blur(50px);
  -o-filter: blur(50px);
  -ms-filter: blur(50px);
  filter: blur(50px);
}
.van-nav-bar {
  background: transparent;
}
.van-hairline--bottom::after {
  border: 0;
}
.musicname {
  font-size: 20px;
  color: #fff;
  position: absolute;
  top: 60px;
  padding: 0 30px;
  box-sizing: border-box;
}
.geshouname {
  font-size: 14px;
  color: #fff;
  position: absolute;
  top: 100px;
}
.musicimg {
  width: 60%;
  height: 35%;
  position: absolute;
  left: 20%;
  top: 24%;
  border-radius: 50%;
  transform: rotate3d(0, 0, 1, 0deg);
}
body .van-slider {
  position: absolute;
  bottom: 14%;
  width: 70%;
  left: 15%;
}
.lefttime {
  position: absolute;
  bottom: 13%;
  left: 5%;
  color: #fff;
  font-size: 14px;
}
.righttime {
  position: absolute;
  bottom: 13%;
  right: 5%;
  color: #fff;
  font-size: 14px;
}
.playctrl {
  position: absolute;
  bottom: 3%;
  left: 44%;
  width: 49px;
}
.prebutton {
  position: absolute;
  bottom: 3%;
  left: 21.6%;
}
.nextbutton {
  position: absolute;
  bottom: 2.98%;
  right: 22%;
  width: 49px;
}
.likebutton {
  position: absolute;
  bottom: 17%;
  left: 25%;
  width: 30px;
}
.pinglunbutton {
  position: absolute;
  bottom: 17%;
  right: 27%;
  width: 30px;
}
.pinglunbuttonspan {
  position: absolute;
  bottom: 20.5%;
  left: 72%;
  border-radius: 10px;
  font-size: 10px;
  padding: 1px 3px;
  color: #fff;
  border: 1px solid #fff;
}
.fixed {
  height: 100%;
  background: rgba(90, 90, 90, 0.2);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
p {
  text-align: center;
  width: 100%;
}
</style>

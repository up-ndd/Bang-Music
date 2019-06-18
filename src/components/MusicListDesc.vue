<template>
  <div>
    <header>
      <van-nav-bar
        title="歌单详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
        @click-right="SousuoHandle"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <div class="topinfo">
      <div class="backgroundimg" :style="imgurl"></div>
      <div class="coverimgwrap">
        <img :src="desc.coverImgUrl">
        <p class="gedanname">{{desc.name}}</p>
        <p class="creatername">
          <img :src="desc.creator.avatarUrl" alt class="creatorheaderimg">
          <span class="nikename">{{desc.creator.nickname}}</span>
        </p>
        <p class="gedanjieshao">{{desc.description}}</p>
      </div>
      <ul class="dowrap">
        <li @click="show=true">
          <van-icon name="comment-o" :info="pingluncount" size="24px" tag="div"></van-icon>
          <p>评论</p>
        </li>
        <li @click="shoucanghandle(desc.id)">
          <van-icon name="star-o" :info="shoucangCount" size="24px" tag="div"></van-icon>
          <p>{{shoucang?'收藏':'已收藏'}}</p>
        </li>
      </ul>
    </div>
    <div class="musiculwrap">
      <ul class="musicul">
        <li class="allplay">
          <router-link :to="{name:'playmusic',query:{all:desc.tracks}}" tag="div">
            全部播放
            <van-icon name="play-circle" size="16px"/>
          </router-link>
        </li>
        <li class="musicli" v-for="(p,i) in desc.tracks" :key="i">
          <router-link :to="{name:'playmusic',query:{all:[desc.tracks[i]]}}">
            <span class="paiming">{{i+1}}.</span>
            <span class="musicname">{{p.name}}</span>
            <p class="geshouname">{{p.ar[0].name}}</p>
          </router-link>
        </li>
      </ul>
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
        :total-items="Math.ceil(pingluncount/2)"
        :show-page-size="5"
        force-ellipses
        change="pinglunmore"
      />
    </van-popup>
  </div>
</template>
<script>
import {
  denglureturn,
  gedanxiangqingreturn,
  gedanshoucang,
  shoucanggedanreturn,
  musiclistpinglunreturn
} from "./../services/music";
export default {
  data() {
    return {
      //歌单id
      gedanid: 0,
      // 歌单详情
      desc: {},
      // 图片链接
      imgurl: {},
      // 是否未收藏
      shoucang: true,
      // 评论数
      pingluncount: 0,
      // 收藏数
      shoucangCount: 0,
      //评论页展示与否
      show: false,
      // 评论页码
      currentPage: 1,
      // 评论列表
      pinglunlist: []
    };
  },
  methods: {
    // 返回
    onClickLeft() {
      window.history.go(-1);
    },
    // 搜索按钮
    SousuoHandle() {
      this.$router.push({ name: "SouSuo" });
    },
    // 收藏按钮
    shoucanghandle(id) {
      if (this.shoucang) {
        denglureturn().then(
          gedanshoucang(1, id).then(
            ((this.shoucangCount += 1), (this.shoucang = !this.shoucang))
          )
        );
      } else {
        denglureturn().then(
          gedanshoucang(2, id).then(
            ((this.shoucangCount -= 1), (this.shoucang = !this.shoucang))
          )
        );
      }
    },
    // 评论模态窗点击返回
    pinglunhiden() {
      this.show = false;
    },
    // 请求单页评论列表
    qingqiupinglun() {
      // console.log("请求评论");
      // console.log(this.currentPage);
      musiclistpinglunreturn(
        this.desc.id,
        20,
        (this.currentPage - 1) * 20
      ).then(item => {
        // console.log(item);
        this.pinglunlist = item.data.comments;
        // console.log(this.pinglunlist);
      });
    }
  },
  created() {
    // console.log(this.$route);
    this.gedanid = this.$route.query.id;
    gedanxiangqingreturn(this.gedanid).then(res => {
      this.desc = res.data.playlist;
      // console.log(this.desc);
      //请求第一页评论
      this.qingqiupinglun();
      this.pingluncount = this.desc.commentCount;
      this.shoucangCount = this.desc.subscribedCount;
      this.imgurl = {
        background: `url(${this.desc.coverImgUrl}) center center no-repeat`
      };
      // 判断有没有收藏
      shoucanggedanreturn().then(item => {
        item.data.playlist.shift();
        let i = item.data.playlist.findIndex(item => {
          return item.id == this.gedanid;
        });
        if (i < 0) {
          this.shoucang = true;
        } else {
          this.shoucang = false;
        }
      });
    });
  },
  watch: {
    currentPage() {
      this.qingqiupinglun();
    }
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
  /* color: #aaaaaa; */
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
/* 主页面 */
.topinfo {
  position: relative;
  height: 250px;
  color: #fff;
  font-size: 14px;
}
.backgroundimg {
  height: 100%;
  background-size: 120% !important;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
}
.coverimgwrap {
  background-color: rgba(110, 110, 110, 0.411);
  width: 100%;
  height: 180px;
  position: absolute;
  top: 0;
  left: 0;
}
.coverimgwrap > img {
  width: 150px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 6px;
}
.coverimgwrap .gedanname {
  position: absolute;
  left: 190px;
  top: 25px;
  font-size: 20px;
}
.coverimgwrap .creatername {
  position: absolute;
  left: 190px;
  top: 80px;
}
.coverimgwrap .gedanjieshao {
  padding-right: 10px;
  box-sizing: border-box;
  position: absolute;
  left: 190px;
  top: 120px;
  height: 60px;
  overflow-y: auto;
}
.creatorheaderimg {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  float: left;
}
.nikename {
  float: left;
  line-height: 30px;
  text-indent: 10px;
}
.dowrap {
  background-color: rgba(110, 110, 110, 0.411);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
}
.dowrap li {
  width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.van-info {
  background: rgba(110, 110, 110, 1);
}
.musicul li {
  list-style: none;
  padding: 13px 20px;
}
.paiming {
  display: inline-block;
  width: 30px;
  text-align: center;
}
.musicname {
  text-indent: 10px;
  display: inline-block;
  width: 328px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.geshouname {
  text-indent: 40px;
  width: 328px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: darkgray;
  font-size: 14px;
}
.geshouname:active {
  text-decoration: underline;
}
</style>
<template>
  <div id="homeflex">
    <!-- 顶部start -->
    <header>
      <van-nav-bar
        title="Bang-Music"
        left-text="返回"
        left-arrow
        style="height:100%;line-height:60px;"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <!-- end -->
    <!-- 轮播图 -->
    <div class="lunbowrap">
      <van-swipe :autoplay="3000" indicator-color="white" style="magintop:10px;">
        <van-swipe-item v-for="(p,i) in pics" :key="i">
          <img :src="p.pic" class="lunbotuimg">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 私人FM、日推、歌单、排行 -->
    <div class="sirenwrap">
      <router-link :to="{name:'SirenFM'}">
        <van-icon name="service" color="write" size="50px"/>
        <p>私人FM</p>
      </router-link>
      <router-link :to="{name:'Meirituijian'}">
        <van-icon name="send-gift" color="write" size="50px"/>
        <p>每日推荐</p>
      </router-link>
      <router-link :to="{name:'Tuijiangedan'}">
        <van-icon name="youzan-shield" color="write" size="50px"/>
        <p>推荐歌单</p>
      </router-link>
      <router-link :to="{name:'Paihangbang'}">
        <van-icon name="fire" color="write" size="50px"/>
        <p>排行榜</p>
      </router-link>
    </div>
    <!-- 热门歌单推荐 -->
    <div class="title">热门歌单</div>
    <ul class="gedanul">
      <li v-for="(p,i) in gedans" :key="i" class="gedanli">
        <img :src="p.coverImgUrl" class="gedancoverimg">
        <p class="gedanname">{{p.name}}</p>
      </li>
    </ul>
    <!-- 底部标签栏start -->
    <van-tabbar v-model="active" inactive-color="#000" route="true" active-color="#5a9edb">
      <van-tabbar-item icon="contact" to="Personal">
        <span class="footername">我的</span>
      </van-tabbar-item>
      <van-tabbar-item icon="wap-home" to="Hone">
        <span class="footername">首页</span>
      </van-tabbar-item>
      <van-tabbar-item icon="tv-o" to="Video">
        <span class="footername">视频</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- end -->
  </div>
</template>
<script>
import { lunboreturn, remengedanreturn } from "./../services/music";
export default {
  data() {
    return {
      pics: [],
      gedans: [],
      active: 1
    };
  },
  async created() {
    const result = await lunboreturn();
    this.pics = result.data.banners;
    const gadanresult = await remengedanreturn();
    this.gedans = gadanresult.data.playlists;
    console.log(this.gedans);
  }
};
</script>
<style>
/* header */
span {
  margin: 0px 5px;
}
header {
  position: relative;
}
.search {
  position: absolute;
  right: 20px;
  top: 10px;
}
/* lunbo */
.lunbowrap {
  min-height: 158px;
}
.lunbotuimg {
  width: 100%;
}
/* siren */
.sirenwrap p {
  color: #5a9edb;
  margin-top: 5px;
}
.sirenwrap {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.sirenwrap div {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.sirenwrap a {
  text-align: center;
}
.sirenwrap a i {
  background: #5a9edb;
  color: #fff !important;
  border-radius: 50%;
  padding: 7px;
}
/* 热门歌单 */
.title {
  line-height: 60px;
  text-indent: 10px;
  font-weight: 900;
}
.gedanul {
  padding-bottom: 60px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.gedanli {
  width: 26%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gedancoverimg {
  width: 100%;
}
.gedanli p {
  margin-top: 5px;
  font-size: 14px;
}
/* footer */
.footername {
  font-size: 13px;
}
</style>
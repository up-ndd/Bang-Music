<template>
  <div id="homeflex">
    <!-- 顶部start -->
    <header>
      <van-nav-bar
        title="Bang-Music"
        left-text="返回"
        left-arrow
        style="height:100%;line-height:60px;"
        @click-right="SousuoHandle"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <!-- end -->
    <!-- 轮播图 -->
    <div class="lunbowrap">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(p,i) in pics" :key="i">
          <img :src="p.pic" class="lunbotuimg">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 私人FM、日推、歌单、排行 -->
    <ul class="sirenwrap">
      <router-link :to="{name:'SirenFM'}" tag="li">
        <van-icon name="service" size="50px"/>
        <p>私人FM</p>
      </router-link>
      <router-link :to="{name:'Meirituijian'}" tag="li">
        <van-icon name="send-gift" size="50px"/>
        <p>每日推荐</p>
      </router-link>
      <router-link :to="{name:'Tuijiangedan'}" tag="li">
        <van-icon name="youzan-shield" size="50px"/>
        <p>推荐歌单</p>
      </router-link>
      <router-link :to="{name:'Paihangbang'}" tag="li">
        <van-icon name="fire" size="50px"/>
        <p>排行榜</p>
      </router-link>
    </ul>
    <!-- 热门歌单推荐 -->
    <div class="title">热门歌单</div>
    <ul class="gedanul">
      <li v-for="(p,i) in gedans" :key="i" class="gedanli">
        <router-link :to="{name:'MusicListDesc',query:{id:p.id}}" tag="li">
          <img :src="p.coverImgUrl" class="gedancoverimg">
          <p class="gedanname">{{p.name}}</p>
          <span class="playcount">
            <van-icon name="play-circle-o"/>
            {{Math.round(p.playCount/10000)}}万
          </span>
        </router-link>
      </li>
    </ul>
    <!-- 底部标签栏start -->
    <van-tabbar v-model="active" inactive-color="#000" route="true" active-color="#5a9edb">
      <van-tabbar-item icon="contact" to="Personal">
        <span class="footername">我的</span>
      </van-tabbar-item>
      <van-tabbar-item icon="wap-home" to="Home">
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
  methods: {
    SousuoHandle() {
      this.$router.push({ name: "SouSuo" });
    }
  },
  async created() {
    const result = await lunboreturn();
    this.pics = result.data.banners;
    const gadanresult = await remengedanreturn();
    this.gedans = gadanresult.data.playlists;
  }
};
</script>
<style>
/* 搜索按钮 */
.search {
  position: absolute;
  right: 20px;
  top: 10px;
}
/* 轮播图 */
.lunbowrap {
  min-height: 155px;
}
.lunbotuimg {
  width: 100%;
}
/* 私人FM */
.sirenwrap p {
  color: #5a9edb;
  margin-top: 5px;
}
.sirenwrap {
  display: flex;
  justify-content: space-around;
}
.sirenwrap div {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.sirenwrap li {
  list-style-type: none;
  text-align: center;
}
.sirenwrap li i {
  background: #5a9edb;
  color: #fff;
  border-radius: 48%;
  padding: 10px;
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
  position: relative;
}
.gedanli .playcount {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  background: rgba(182, 147, 147, 0.4);
  color: #fff;
  line-height: 16px;
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
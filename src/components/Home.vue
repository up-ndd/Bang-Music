<template>
  <div>
    <!-- 顶部 -->
    <header>
      <router-link :to="{name:'Personal'}">
        <span>我的</span>
      </router-link>
      <router-link :to="{name:'Home'}">
        <span>首页</span>
      </router-link>
      <router-link :to="{name:'Video'}">
        <span>视频</span>
      </router-link>
    </header>
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
        <van-icon name="service" color="red" size="50px"/>
        <p>私人FM</p>
      </router-link>
      <router-link :to="{name:'Meirituijian'}">
        <van-icon name="service" color="red" size="50px"/>
        <p>每日推荐</p>
      </router-link>
      <router-link :to="{name:'Tuijiangedan'}">
        <van-icon name="service" color="red" size="50px"/>
        <p>推荐歌单</p>
      </router-link>
      <router-link :to="{name:'Paihangbang'}">
        <van-icon name="service" color="red" size="50px"/>
        <p>排行榜</p>
      </router-link>
    </div>
    <!-- 音乐播放控制 -->
    <footer>
      <router-link :to="{name:'playmusic'}">音乐播放位置</router-link>
    </footer>
  </div>
</template>
<script>
import { lunboreturn } from "./../services/music";
export default {
  data() {
    return {
      pics: []
    };
  },
  async created() {
    const result = await lunboreturn();
    this.pics = result.data.banners;
    // console.log(this.pics);
  }
};
</script>
<style>
.lunbotuimg {
  width: 99%;
  margin-left: 0.5%;
  /* border-radius: 10px; */
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
.lunbowrap {
  min-height: 158px;
}

span {
  margin: 0px 5px;
}
</style>
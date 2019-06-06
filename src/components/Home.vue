<template>
  <div>
    <!-- 顶部 -->
    <header>
      <router-link :to="{name:'Personal'}">我的</router-link>
      <router-link :to="{name:'Home'}">首页</router-link>
      <router-link :to="{name:'Video'}">视频</router-link>
    </header>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" style="magintop:10px;">
      <van-swipe-item v-for="(p,i) in pics" :key="i">
        <img :src="p.pic" class="lunbotuimg">
      </van-swipe-item>
    </van-swipe>
    <!-- 私人FM、日推、歌单、排行 -->
    






    <!-- 音乐播放控制 -->
    <footer>
      <router-link :to="{name:'playmusic'}">音乐播放位置</router-link>
    </footer>
  </div>
</template>
<script>
import { lunboreturn } from "./../serves/music";
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
  width: 100%;
  border-radius: 10px;
}
</style>
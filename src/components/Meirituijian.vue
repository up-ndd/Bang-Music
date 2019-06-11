<template>
  <div class="meirituijianwrap" style="argin-top: -60px">
    <div style="position: relative;">
      <img :src="playlist[0].artists[0].img1v1Url" style="width:100%">
      <p
        style="position: absolute;
    left: 20px;
    bottom: 20px;
    color: #fff;
    font-size: 22px;"
      >每日推荐</p>
    </div>
    <ol>
      <li>
        <router-link :to="{name:'playmusic',query:{all:playlist}}">
          全部播放
          <van-icon name="play-circle" size="16px"/>
        </router-link>
      </li>
      <li v-for="(p,i) in playlist" :key="i">
        <router-link :to="{name:'playmusic',query:{all:[p]}}">{{p.name}} -- {{p.artists[0].name}}</router-link>
      </li>
    </ol>
  </div>
</template>
<<<<<<< HEAD
<style scoped>
.meirituijanwrap {
  margin-top: -60px;
=======
<script>
import { denglureturn, meirituijianreturn } from "./../services/music";
export default {
  data() {
    return {
      playlist: []
    };
  },
  async created() {
    denglureturn().then(res => {
      meirituijianreturn().then(r => {
        //   console.log(r);
        this.playlist = r.data.recommend;
        console.log(this.playlist);
      });
    });
  }
};
</script>
<style scoped>
.meirituijianwrap {
  margin-top: -62px;
  position: absolute;
>>>>>>> 1e0c8b940cab2935b9275501d3161d58351d41da
}
</style>
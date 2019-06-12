<template>
  <div class="meirituijianwrap" style="argin-top: -60px">
    <div style="position: relative;">
      <img :src="playlist[0].album.picUrl" style="width:100%;height:300px">
      <p
        style="position: absolute;
    left: 20px;
    top: 200px;
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
        <router-link
          :to="{name:'playmusic',query:{all:[p]}}"
        >{{i+1 }}. {{p.name}} -- {{p.artists[0].name}}</router-link>
      </li>
    </ol>
  </div>
</template>
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
        this.playlist.map((item, i) => {
          let obj = {};
          obj.name = this.playlist[i].artists[0].name;
          item.ar = [{ name: obj.name }];
        });
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
}
li {
  list-style: none;
  padding: 13px 20px;
}
</style>
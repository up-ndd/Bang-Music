<template>
  <div class="meirituijianwrap" style="argin-top: -60px">
    <header>
      <van-nav-bar
        title="每日推荐"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <div style="position: relative;">
      <img :src="playlist[0].album.picUrl" style="width:100%;height:300px">
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
  methods: {
    onClickLeft() {
      window.history.go(-1);
    }
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
}
li {
  list-style: none;
  padding: 13px 20px;
}
</style>
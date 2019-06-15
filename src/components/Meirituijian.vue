<template>
  <div class="meirituijianwrap">
    <header>
      <van-nav-bar
        title="每日推荐"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
        @click-right="SousuoHandle"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <div style="position: relative;">
      <img :src="playlist[0].album.picUrl" style="width:100%;height:300px">
    </div>
    <ol>
      <li>
        <router-link :to="{name:'playmusic',query:{all:playlist}}" tag="div">
          全部播放
          <van-icon name="play-circle" size="16px"/>
        </router-link>
      </li>
      <li v-for="(p,i) in playlist" :key="i">
        <router-link :to="{name:'playmusic',query:{all:[p]}}" tag="div">
          <span class="paiming">{{i+1}}.</span>
          <span class="musicname">{{p.name}}</span>
          <p class="geshouname">{{p.artists[0].name}}</p>
        </router-link>
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
    },
    SousuoHandle() {
      this.$router.push({ name: "SouSuo" });
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
          item.al = { picUrl: item.album.picUrl };
          item.dt = item.bMusic.playTime;
        });
        // console.log(this.playlist);
      });
    });
  }
};
</script>
<style scoped>
li {
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
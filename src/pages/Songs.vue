<template>
  <div class="s">
    <header>
      <van-nav-bar
        title="我收藏的歌单"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
        @click-right="SousuoHandle"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <img :src="songlist[5].coverImgUrl" style="height:280px;width:100%">
    <ul>
      <li>
        <router-link :to="{name:'playmusic',query:{all:songlist}}">
          全部播放
          <van-icon name="play-circle" size="16px"/>
        </router-link>
      </li>
      <li v-for="(p,i) in songlist" :key="i">
        <router-link
          :to="{
          name:'MusicListDesc',
          query:{
           p
          },
        }"
        >
          <h4>{{i+1}}、{{p.name}}</h4>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { shoucanggedanreturn } from "./../services/music";
export default {
  data() {
    return {
      songlist: [],
      count: 0
    };
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    },
    song() {
      this.count = p;
    },
    SousuoHandle(){
      this.$router.push({name:"SouSuo"})
    }
  },
  async created() {
    shoucanggedanreturn()
      .then(result => {
        this.songlist = result.data.playlist;
        this.songlist.shift();
        this.count = this.songlist.length;
      })
      .catch(err => {});
  }
};
</script>
<style scoped>
li {
  line-height: 60px;
  padding-left: 10px;
  box-sizing: border-box;
  float: left;
  width: 100%;
}
h4 {
  float: left;
  padding-left: 20px;
}
</style>

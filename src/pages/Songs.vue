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
           id:p.id
          },
        }"
        >
          <span class="paixu">{{i+1}}</span>.
          <span>{{p.name}}</span>
          <p class="geshou">{{p.creator.nickname}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { shoucanggedanreturn } from "./../services/music";
import { gedanxiangqingreturn } from "./../services/music";
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
    SousuoHandle() {
      this.$router.push({ name: "SouSuo" });
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
  padding: 10px;
  box-sizing: border-box;
  float: left;
  width: 100%;
}
.paixu {
  display: inline-block;
  width: 30px;
  text-align: center;
}
.geshou {
  text-indent: 40px;
  width: 328px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: darkgray;
  font-size: 16px;
}
</style>

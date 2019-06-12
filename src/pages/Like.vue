<template>
  <div id="likemusiclist">
    <header>
      <van-nav-bar
        title="我喜欢的音乐"
        left-text="返回"
        @click-left="onClickLeft"
        left-arrow
        style="height:100%;line-height:60px;"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <img :src="likelist[6].al.picUrl" style="height:280px;width:100%">
    <ul>
      <li>
        <router-link :to="{name:'playmusic',query:{all:likelist}}">
          全部播放
          <van-icon name="play-circle" size="16px"/>
        </router-link>
      </li>
      <li v-for="(p,i) in likelist" :key="i">
        <router-link
          :to="{
          name:'playmusic',
          query:{
            all:[p]
          }
        }"
        >
          <h4>{{i+1}}、{{p.name}}</h4>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { likelistreturn } from "./../services/music";
import { likedatilereturn } from "./../services/music";
export default {
  data() {
    return {
      likelist: []
    };
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    }
  },
  async created() {
    let id = "";
    const result = await likelistreturn();
    // console.log(result.data.ids);
    for (let a = 0; a < result.data.ids.length; a++) {
      if (a == 0) {
        id += result.data.ids[a];
      } else {
        id += "," + result.data.ids[a];
      }
      // console.log(id);
    }
    likedatilereturn(id).then(res => {
      this.likelist = res.data.songs;
      //console.log(this.likelist);
    });
  }
};
</script>
<style scoped>
ul {
  margin-top: 25px;
}
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

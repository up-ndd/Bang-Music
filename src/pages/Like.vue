<template>
  <div id="likemusiclist">
    <header>
      <van-nav-bar
        title="我喜欢的音乐"
        left-text="返回"
        @click-left="onClickLeft"
        left-arrow
        style="height:100%;line-height:60px;"
        @click-right="SousuoHandle"
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
          <p>{{i+1}}、{{p.name}}</p>
          <span>{{p.ar[0].name}}</span>
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
      likelist: [],
      count: 1
    };
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    },
    like() {
      this.count = p;
    },
    SousuoHandle() {
      this.$router.push({ name: "SouSuo" });
    }
  },
  async created() {
    let id = "";
    const result = await likelistreturn();
    // console.log(result);
    for (let a = 0; a < result.data.ids.length; a++) {
      if (a == 0) {
        id += result.data.ids[a];
      } else {
        id += "," + result.data.ids[a];
      }
    }
    likedatilereturn(id).then(res => {
      this.likelist = res.data.songs;
      console.log(this.likelist);
      this.count = this.likelist.length;
    });
  }
};
</script>
<style scoped>
li {
  line-height: 30px;
  padding-left: 10px;
  box-sizing: border-box;
  float: left;
  width: 100%;
  background: rgb(251, 255, 255);
}
p {
  padding-left: 20px;
}
span {
  float: left;
  padding-left: 60px;
  color: darkgray;
}
</style>

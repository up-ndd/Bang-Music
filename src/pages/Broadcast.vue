<template>
  <div class="b">
    <header>
      <van-nav-bar
        title="最近播放的音乐"
        left-text="返回"
        @click-left="onClickLeft"
        left-arrow
        style="height:100%;line-height:60px;"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <img :src="broadcast[12].al.picUrl" style="height:280px;width:100%">
    <ul>
      <li>
        <router-link :to="{name:'playmusic',query:{all:broadcast}}">
          全部播放
          <van-icon name="play-circle" size="16px"/>
        </router-link>
      </li>
      <li v-for="(p,i) in broadcast" :key="i">
        <router-link
          :to="{
        name:'playmusic',
        query:{
          all:[p]
        },
        }"
        >
          <h4>{{i+1}}、{{p.name}}</h4>
          <!-- <img :src="p.al.picUrl" alt> -->
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { broadcastreturn } from "./../services/music";
export default {
  data() {
    return {
      broadcast: []
    };
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    }
  },
  async created() {
    const result = await broadcastreturn();
    result.data.weekData.forEach(element => {
      this.broadcast.push(element.song);
    });
    console.log(this.broadcast[0].al.picUrl);
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


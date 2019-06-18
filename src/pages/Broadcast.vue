<template>
  <div class="b">
    <header>
      <van-nav-bar
        title="最近播放的音乐"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
        @click-right="SousuoHandle"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <img :src="broadcast[14].al.picUrl" style="height:280px;width:100%">
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
          <span class="paixu">{{i+1}}</span>.
          <span>{{p.name}}</span>
          <p class="geshou">{{p.ar[0].name}}</p>
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
      broadcast: [],
      count: 0
    };
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    },
    broadcasts() {
      this.count = p;
    },
    SousuoHandle() {
      this.$router.push({ name: "SouSuo" });
    }
  },
  async created() {
    const result = await broadcastreturn();
    result.data.weekData.forEach(element => {
      this.broadcast.push(element.song);
      this.count = this.broadcast.length;
    });
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
  font-size: 14px;
}
</style>


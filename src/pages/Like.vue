<template>
  <div id="likemusiclist">
    <header>
      <van-nav-bar
        title="我喜欢的音乐"
        left-text="返回"
        @click-left="onClickLeft"
        @click-right="SousuoHandle"
        left-arrow
        style="height:100%;line-height:60px;"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <img :src="likelist[12].al.picUrl" style="height:280px;width:100%">
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
          <span class="paixu">{{i+1}}</span>.
          <span class="geming">{{p.name}}</span>
          <p class="geshou">{{p.ar[0].name}}</p>
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
    for (let a = 0; a < result.data.ids.length; a++) {
      if (a == 0) {
        id += result.data.ids[a];
      } else {
        id += "," + result.data.ids[a];
      }
    }
    likedatilereturn(id).then(res => {
      this.likelist = res.data.songs;
      this.count = this.likelist.length;
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

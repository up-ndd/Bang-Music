<template>
  <div class="tuijiangedanwrap">
    <header>
      <van-nav-bar
        title="推荐歌单"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
        @click-right="SousuoHandle"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <ul style="margin:0" class="gedanul">
      <li v-for="(p,i) in list" :key="i" class="gedanli">
        <router-link :to="{name:'MusicListDesc',query:{id:p.id}}" tag="li">
          <img :src="p.picUrl" alt>
          <p>{{p.name}}</p>
          <span class="playcount">
            <van-icon name="play-circle-o"/>
            {{Math.round(p.playcount/10000)}}万
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { denglureturn, tuijiangedanreturn } from "./../services/music";
export default {
  data() {
    return {
      list: []
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
  created() {
    denglureturn().then(res => {
      tuijiangedanreturn().then(result => {
        this.list = result.data.recommend;
        // console.log(this.list);
      });
    });
  }
};
</script>

<style scoped>
.gedanul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.gedanli {
  width: 26%;
  height: 180px;
  position: relative;
}
.gedanli img {
  width: 100%;
}
.gedanli p {
  margin-top: 5px;
  font-size: 14px;
}
.gedanli .playcount {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  background: rgba(182, 147, 147, 0.4);
  color: #fff;
  line-height: 16px;
}
</style>
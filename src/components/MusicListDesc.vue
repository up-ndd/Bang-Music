<template>
  <div>
    <header>
      <van-nav-bar
        title="歌单详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <div class="topinfo">
      <div class="backgroundimg" :style="imgurl"></div>
      <div class="coverimgwrap">
        <img :src="desc.coverImgUrl">
        <p class="gedanname">{{desc.name}}</p>
        <p class="creatername">{{desc.creator.nickname}}</p>
        <p class="gedanjieshao">{{desc.description}}</p>
      </div>
      <div class="dowrap">评论,收藏</div>
    </div>
  </div>
</template>
<script>
import { gedanxiangqingreturn } from "./../services/music";
export default {
  data() {
    return {
      gedan: {},
      desc: {},
      imgurl: {}
    };
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    }
  },
  created() {
    this.gedan = this.$route.query.p;
    gedanxiangqingreturn(this.gedan.id).then(res => {
      this.desc = res.data.playlist;
      console.log(this.desc);
      this.imgurl = {
        background: `url(${this.desc.coverImgUrl}) center center no-repeat`
      };
    });
  }
};
</script>
<style scoped>
.topinfo {
  position: relative;
  height: 250px;
  color: #fff;
  font-size: 14px;
}
.backgroundimg {
  height: 100%;
  background-size: 120% !important;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
}
.coverimgwrap {
  background-color: rgba(110, 110, 110, 0.411);
  width: 100%;
  height: 180px;
  position: absolute;
  top: 0;
  left: 0;
}
.coverimgwrap img {
  width: 150px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 6px;
}
.coverimgwrap .gedanname {
  position: absolute;
  left: 190px;
  top: 25px;
  font-size: 20px;
}
.coverimgwrap .creatername {
  position: absolute;
  left: 190px;
  top: 90px;
}
.coverimgwrap .gedanjieshao {
  position: absolute;
  left: 190px;
  top: 120px;
  height: 60px;
  overflow-y: auto;
}
.dowrap {
  background-color: rgba(110, 110, 110, 0.411);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
}
</style>
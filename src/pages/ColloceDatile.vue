<template>
  <div class="b">
    <header>
      <van-nav-bar
        title="我收藏的MV"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
      ></van-nav-bar>
    </header>

    <video
      v-for="(p,i) in Cd.urls"
      :key="i"
      :src="p.url"
      controls
      style="height:300px;width:355px"
      autoplay
    ></video>
  </div>
</template>
<script>
import { colloecdatilereturn } from "./../services/music";
// import { collectreturn } from "./../services/music";
export default {
  data() {
    return {
      Cd: {}
    };
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    }
  },
  async created() {
    // console.log(this.$route);
    const result = await colloecdatilereturn(this.$route.query.id);
    //console.log(result);
    this.Cd = result.data;
    console.log(this.Cd);
  }
};
</script>
<style>
video {
  margin-left: 25px;
  margin-top: -10px;
  border-bottom: none;
  margin-top: 20px;
}
h3 {
  margin-top: -60px;
  line-height: 40px;
  text-align: center;
}
</style>
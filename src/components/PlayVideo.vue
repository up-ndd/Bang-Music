<template>
  <div>
    <header>
      <van-nav-bar
        title="推荐视频"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="SousuoHandle"
        style="height:100%;line-height:60px;"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <div>
      <video :src="watch" controls autoplay></video>
    </div>
  </div>
</template>
<script>
import { videoDetalreturn } from "./../services/music";
export default {
  data() {
    return {
      list: [],
      active: 2,
      watch: ""
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
  async created() {
    // console.log(this.$route);
    const Vid = this.$route.query.id;
    // console.log(Vid);
    const total = await videoDetalreturn(Vid);
    this.watch = total.data.data.url;
  }
};
</script>
<style scoped>
video {
  width: 90%;
  height: 10rem;
  margin: 0.5rem 1rem;
}
</style>



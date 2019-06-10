<template>
  <div class="paihangbangwrap">
    <div class="paihangbanghead">BangMusic排行榜</div>
    <div class="paihangbangmain">排行榜主要内容</div>
    <footer>
      <router-link :to="{name:'playmusic'}">音乐播放位置</router-link>
    </footer>
  </div>
</template>
<style>
.paihangbangwrap {
  margin-top: -60px;
}
</style>
<script>
import { paihangbangreturn } from "./../serves/music";
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    const result = await paihangbangreturn();
    //     this.pics = result.data.banners;
    console.log(result.data.privileges);
  }
};
</script>
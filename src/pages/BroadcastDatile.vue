<template>
  <div class="b">
    <h1>最近播放音乐详情页面</h1>
    <audio v-for="(p,i) in bd.url" :key="i" :src="p.url"></audio>
  </div>
</template>
<script>
import { broadcastdetalreturn } from "./../services/music";
//import { broadcastreturn } from "./../services/music";
export default {
  data() {
    return {
      bd: {}
    };
  },
  async created() {
    const result = await broadcastdetalreturn(this.$route.query.id);
    //console.log(result);
    this.bd = result.data;
    // console.log(this.bd);
  }
};
</script>
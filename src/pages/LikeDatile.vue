<template>
  <div class="d">
    <h1>我喜欢的歌曲详情</h1>
    <h5>{{likesong.name}}</h5>
    <img :src="likesong.picUrl" alt="likesong.name">
  </div>
</template>
<script>
import { likedatilereturn } from "./../services/music";
export default {
  data() {
    return {
      likesong: {}
    };
  },
  async created() {
    const result = await likedatilereturn(this.$route.query.id);
    this.likesong = result.data.songs;
  }
};
</script>
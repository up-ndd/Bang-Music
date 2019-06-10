<template>
  <div class="d">
    <h1>我喜欢的歌曲详情</h1>
    <h5>{{likelist.name}}</h5>
    <img :src="likelist.url" alt="likelist.name">
  </div>
</template>
<script>
import { likedatilereturn } from "./../services/music";
export default {
  data() {
    return {
      likelist: {}
    };
  },
  async created() {
    const result = await likedatilereturn(this.$route.query.ids);
    this.likelist = result.data.ids.forEach(element => {
      ids.name;
    });
  }
};
</script>
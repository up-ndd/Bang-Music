<template>
  <div class="d">
    <h1>我喜欢的歌曲详情</h1>
    <!-- //<h5>{{likelist.name}}</h5> -->
    <audio :src="likelist.url"></audio>
  </div>
</template>
<script>
import { likedatileurl } from "./../services/music";
import { likelistreturn } from "./../services/music";
export default {
  data() {
    return {
      likelist: {}
    };
  },
  async created() {
    const result = await likedatileurl(this.$route.query.ids);
    const likelist = result.data.data[0];
  }
};
</script>
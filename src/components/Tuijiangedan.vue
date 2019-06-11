<template>
  <div class="tuijiangedanwrap">
    <h1>推荐歌单</h1>
    <ul style="margin:0">
      <li v-for="(p,i) in list" :key="i">{{p.name}}</li>
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
  created() {
    denglureturn().then(res => {
      tuijiangedanreturn().then(result => {
        this.list = result.data.recommend;
      });
    });
  }
};
</script>

<style scoped>
.tuijiangedanwrap h1 {
  margin-top: -62px;
}
</style>
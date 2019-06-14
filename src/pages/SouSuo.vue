<template>
  <div class="sou">
    <div class="suo">
      <input type="text" placeholder="请输入歌曲名、歌手名字、mv信息" v-model="search">
      <div class="dian">搜索</div>
    </div>
  </div>
</template>
<script>
import { search } from "./../services/music";
export default {
  data() {
    return {
      searchlist: []
    };
  },
  async created() {
    const result = await search();
    console.log(result);
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.suo {
  margin-top: -40px;
  width: 100%;
  height: 50px;
}
.sou input {
  height: 50px;
  width: 70%;
  margin-left: 30px;
  border: 1px solid #5a9edb;
  float: left;
}
.sou .dian {
  height: 50px;
  width: 50px;
  border: 1px solid #5a9edb;
  float: left;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
}
</style>
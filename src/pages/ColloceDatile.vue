<template>
  <div class="b">
    <h3>mv播放页面</h3>

    <video v-for="(p,i) in Cd.urls" :key="i" :src="p.url" controls style="height:300px;width:355px"></video>
  </div>
</template>
<script>
import { colloecdatilereturn } from "./../services/music";
//import { collectreturn } from "./../services/music";
export default {
  data() {
    return {
      Cd: {}
    };
  },
  async created() {
    // console.log(this.$route);
    const result = await colloecdatilereturn(this.$route.query.id);
    //console.log(result);
    this.Cd = result.data;
    //console.log(this.Cd);
  }
};
</script>
<style>
video {
  margin-left: 25px;
  margin-top: -10px;
  border-bottom: none;
}
h3 {
  margin-top: -60px;
  line-height: 40px;
  text-align: center;
}
</style>
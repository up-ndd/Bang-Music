<template>
  <div class="b">
    <h3>Mv详情页</h3>
    <h4>{{Cd.name}}</h4>

    <video :src="Cd.video?video.video.url:''" controls></video>
  </div>
</template>
<script>
import { colloecdatilereturn } from "./../services/music";
export default {
  data() {
    return {
      Cd: {}
    };
  },
  async created() {
    const result = await colloecdatilereturn(this.$route.query.id);
    this.Cd = result.data.brs;
  }
};
</script>
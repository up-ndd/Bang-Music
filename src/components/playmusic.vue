<template>
  <div class="contentwrap">
    <h3 v-for="p in playlist" :key="p.id">
      {{p.name}}
      <p>{{p.ar[0].name}}</p>
    </h3>
    <audio v-for="(p,i) in urllist" :src="p.url" :key="i" controls autoplay style="margin-left:15%"></audio>
  </div>
</template>
<script>
import { getmusicurl } from "./../services/music";
export default {
  data() {
    return {
      playlist: [],
      urllist: []
    };
  },
  async created() {
    this.playlist = this.$route.query.all;
    //console.log(this.playlist);
    this.playlist.forEach(item => this.urllist.push(getmusicurl(item.id)));
    //console.log(this.urllist);
  }
};
</script>
<style scoped>
.contentwrap {
  margin-top: -60px;
}
</style>

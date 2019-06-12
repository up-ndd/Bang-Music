<template>
  <div class="s">
    <ul>
      <h3>我收藏的歌曲</h3>
      <li v-for="(p,i) in songlist" :key="i">
        <router-link
          :to="{
          name:'playmusic',
          query:{
            all:[p]
          },
        }"
        >
          <h5>{{i+1}}、{{p.name}}</h5>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { shoucanggedanreturn } from "./../services/music";
import { broadcastdetalreturn } from "./../services/music";
export default {
  data() {
    return {
      songlist: []
    };
  },
  async created() {
    shoucanggedanreturn()
      .then(result => {
        console.log(result);
        this.songlist = result.data.playlist;
        this.songlist.shift();
        console.log(this.songlist.length);
      })
      .catch(err => {});
  }
};
</script>
<style scoped>
ul {
  margin-top: -50px;
}
h3 {
  line-height: 40px;
  text-align: center;
}
li {
  line-height: 60px;
  padding-left: 30px;

  float: left;
  width: 100%;
}
img {
  height: 50px;
  width: 50px;
  float: left;
  margin-left: 10px;
  padding-top: 10px;
}
h5 {
  float: left;
  padding-left: 20px;
}
</style>

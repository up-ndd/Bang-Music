<template>
  <div class="b">
    <ul>
      <h3>最近播放的音乐</h3>
      <li v-for="(p,i) in broadcast" :key="i">
        <router-link
          :to="{
        name:'BroadcastDatile',
        query:{
          id:i,
          name:i
        },
        parns:{
          id:i
        }
        
        }"
        >
          <img :src="p.song.al.picUrl" alt>
          <h5>{{p.song.name}}</h5>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { broadcastreturn } from "./../services/music";
import { broadcastdetal } from "./../services/music";
export default {
  data() {
    return {
      broadcast: []
    };
  },
  async created() {
    const result = await broadcastreturn();
    //console.log(result);
    this.broadcast = result.data.weekData;
    console.log(this.broadcast[0].song);
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
  border-bottom: 1px solid gray;
  float: left;
  width: 100%;
}
img {
  height: 50px;
  width: 50px;
  float: left;
  margin-left: 10px;
  padding-top: 5px;
}
h5 {
  float: left;
  padding-left: 20px;
}
.b {
  height: 100%;
  background: linear-gradient(rgb(253, 253, 253), rgb(233, 225, 225));
}
</style>


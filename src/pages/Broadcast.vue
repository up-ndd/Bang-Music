<template>
  <div class="b">
    <h1>最近播放的音乐</h1>
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
        <h5>{{p.song.name}}</h5>
      </router-link>
    </li>
  </div>
</template>
<script>
import { broadcastreturn } from "./../services/music";
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
    //console.log(this.broadcast);
  }
};
</script>


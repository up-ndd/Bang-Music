<template>
  <div class="s">
    <h1>我收藏的歌曲</h1>
    <ul>
      <li v-for="(p,i) in songlist" :key="i">
        <router-link
          :to="{
          name:'plmusic',
          query:{
            all:[p]
          },
        }"
        >
          <h5>{{p.nickname}}</h5>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { shoucanggedanreturn } from "./../services/music";
export default {
  data() {
    return {
      songlist: []
    };
  },
  async creaded() {
    console.log(shoucanggedanreturn());
    // result.data.playmusic[1]
  }
};
</script>
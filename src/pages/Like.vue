<template>
  <div id="likemusiclist">
    <ul>
      <h3>我喜欢的音乐</h3>
      <li v-for="i in likelist" :key="i">
        <router-link
          :to="{
          name:'LikeDatile',
          query:{
            id:i,
            name:i,
            r:Math.random()*1000
          },
          params:{
            id:i
          }
        }"
        >
          <h5>{{i}}</h5>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { likelistreturn } from "./../services/music";
import { likedatilereturn } from "./../services/music";
export default {
  data() {
    return {
      likelist: []
    };
  },
  async created() {
    const result = await likelistreturn();
    console.log(result);
    result.data.ids.forEach(async id => {
      const detail = await likedatilereturn(id);
      this.likelist.push(detail.data.songs[0].name);
    });
  }
};
</script>
<style>
ul {
  margin-top: -50px;
}
h3 {
  line-height: 40px;
  text-align: center;
}
li {
  line-height: 50px;
  padding-left: 30px;
  border-bottom: 1px solid gray;
}
</style>

<template>
  <div id="likemusiclist">
    <ul>
      <h3>我喜欢的音乐</h3>
      <li v-for="(p,i) in likelist" :key="i">
        <router-link
          :to="{
          name:'playmusic',
          query:{
            all:[p]
          }
        }"
        >
          <img :src="p.al.picUrl">
          <h5>{{p.name}}</h5>
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
    let id = "";
    const result = await likelistreturn();
    // console.log(result.data.ids);
    for (let a = 0; a < result.data.ids.length; a++) {
      if (a == 0) {
        id += result.data.ids[a];
      } else {
        id += "," + result.data.ids[a];
      }
      // console.log(id);
    }
    likedatilereturn(id).then(res => {
      this.likelist = res.data.songs;
      //console.log(this.likelist);
    });
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

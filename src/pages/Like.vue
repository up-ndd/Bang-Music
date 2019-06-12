<template>
  <div id="likemusiclist">
    <header>
      <van-nav-bar
        title="Bang-Music"
        left-text="返回"
        left-arrow
        style="height:100%;line-height:60px;"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>

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
          <!-- <img :src="p.al.picUrl"> -->
          <h5>{{i+1}}、{{p.name}}</h5>
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
      console.log(this.likelist.length);
    });
  }
};
</script>
<style scoped>
.like {
  margin-top: -40px;
}
ul {
  margin-top: 20px;
}
h3 {
  line-height: 40px;
  text-align: center;
  margin-top: 10px;
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

<template>
  <div>
    <header>
      <router-link :to="{name:'Personal'}">
        <span>我的</span>
      </router-link>
      <router-link :to="{name:'Home'}">
        <span>首页</span>
      </router-link>
      <router-link :to="{name:'Video'}">
        <span>视频</span>
      </router-link>
    </header>
    <div>
      <ul>
        <li v-for=" (a,i) in list" :key="i">
          <img :src="a.cover">
        </li>
      </ul>
    </div>
    <footer>
      <router-link :to="{name:'playmusic'}">音乐播放位置</router-link>
    </footer>
  </div>
</template>
<script>
import { videoreturn } from "./../services/music";
import { videoDetalreturn } from "./../services/music";
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    const total = await videoreturn();
    console.log(total.data.data);
    this.list = total.data.data; //显示图片
    console.log(this.list[0].id);
    this.list.forEach(element => {
      // console.log(element.id);
      const uid = videoDetalreturn(element.id);
      console.log(uid);
    });
    // const dizhi = new videoDetalreturn(id);
    // console.log(dizhi);
  }
};
</script>
<<<<<<< HEAD
<style scoped>
=======
<<<<<<< HEAD
<style scoped>
=======
<style>
>>>>>>> 28683e676065603fc4bc166ed006ebaab44e3a39
* {
  margin: 0;
  padding: 0;
}
>>>>>>> 4ea9409731f1107b7170533f71882bf03993803c
img {
  width: 90%;
  height: 10rem;
  margin: 0.5rem auto;
}
</style>


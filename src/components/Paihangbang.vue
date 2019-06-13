<template>
  <div class="paihangbangwrap">
    <div class="paihangbangmain">
      <p
        style="position: absolute;
    left: 20px;
    top: 200px;
    color: #fff;
    font-size: 22px;"
      >排行榜</p>
      <img :src="list[0].al.picUrl" style="width:100%;height:300px;margin-top:-62px">
      <ul>
        <li>
          <router-link :to="{name:'playmusic',query:{all:list}}">
            全部播放
            <van-icon name="play-circle" size="16px"/>
          </router-link>
        </li>
        <li v-for="(p,i) in list" :key="i">
          <router-link
            :to="{
                name:'playmusic',
                query:{all:[p]}
          }"
          >{{(i+1)}}：{{p.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { paihangbangreturn } from "./../services/music";
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    const result = await paihangbangreturn();
    this.list = result.data.playlist.tracks;
    //     console.log(this.list);
  }
};
</script>
<style scoped>
.paihangbanghead {
  height: 60px;
  margin-top: -62px;
  background: linear-gradient(rgb(94, 224, 218), rgb(176, 240, 234));
  line-height: 60px;
  text-indent: 10px;
  font-size: 20px;
  color: aliceblue;
}
li {
  list-style: none;
  padding: 14px 20px;
}
</style>

<template>
  <div class="paihangbangwrap">
    <div class="paihangbanghead">BangMusic排行榜</div>
    <div class="paihangbangmain">
      <ul>
        <li>
          <router-link :to="{name:'playmusic',query:{all:ids}}">
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
    <footer>
      <router-link :to="{name:'playmusic'}">音乐播放位置</router-link>
    </footer>
  </div>
</template>
<style>
.paihangbangwrap {
  margin-top: -60px;
}
</style>
<script>
import { paihangbangreturn } from "./../services/music";
export default {
  data() {
    return {
      list: [],
      ids: []
    };
  },
  async created() {
    const result = await paihangbangreturn();
    //     console.log(result);
    this.list = result.data.playlist.tracks;
    //     console.log(this.list);
    this.list.forEach(element => {
      this.ids.push(element);
    });
  }
};
</script>
<style>
.paihangbanghead {
  height: 60px;
  background: linear-gradient(rgb(57, 154, 184), rgb(56, 231, 222));
  line-height: 60px;
  text-indent: 5px;
}
li {
  list-style: none;
  text-indent: 20px;
  border-bottom: 1px dashed rgb(35, 143, 143);
  padding: 10px 0;
}
li:nth-of-type(1) {
  color: aquamarine;
}
li:nth-of-type(1) i {
  text-indent: 0;
}
.paihangbangmain {
  margin-top: 50px;
}
</style>

<template>
  <div class="paihangbangwrap">
    <div class="paihangbangmain">
      <header>
        <van-nav-bar
          title="排行榜"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
          style="height:100%;line-height:60px;"
        >
          <van-icon name="search" slot="right" size="24px"/>
        </van-nav-bar>
      </header>
      <img :src="list[61].al.picUrl" style="width:100%; max-height:300px">
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
  methods: {
    onClickLeft() {
      window.history.go(-1);
    }
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

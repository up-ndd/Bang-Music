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
          @click-right="SousuoHandle"
        >
          <van-icon name="search" slot="right" size="24px"/>
        </van-nav-bar>
      </header>
      <img :src="list[61].al.picUrl" style="width:100%; max-height:300px">
      <ul>
        <li>
          <router-link :to="{name:'playmusic',query:{all:list}}" tag="div">
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
            tag="div"
          >
            <span class="paiming">{{i+1}}.</span>
            <span class="musicname">{{p.name}}</span>
            <p class="geshouname">{{p.ar[0].name}}</p>
          </router-link>
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
    },
    SousuoHandle() {
      this.$router.push({ name: "SouSuo" });
    }
  },
  async created() {
    const result = await paihangbangreturn();
    this.list = result.data.playlist.tracks;
    console.log(this.list);
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
  padding: 13px 20px;
}
li:nth-of-type(1) {
  line-height: 12px;
}
.paiming {
  display: inline-block;
  width: 30px;
  text-align: center;
}
.musicname {
  text-indent: 10px;
  display: inline-block;
  width: 328px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.geshouname {
  text-indent: 40px;
  width: 328px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: darkgray;
  font-size: 14px;
}
.geshouname:active {
  text-decoration: underline;
}
</style>

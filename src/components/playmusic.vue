<template>
  <div class="contentwrap">
    <div>
      <p>现在播放第{{i+1}}首</p>
      <p style="font-size:20px">{{playlist[i].name}}</p>
      <p>{{playlist[i].ar[0].name}}</p>
      <audio :src="urllist[ip].url" controls autoplay></audio>
      <div>
        <van-button @click="premusic" plain hairline type="primary">上一首</van-button>
        <van-button @click="nextmusic" plain hairline type="primary">下一首</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getmusicurl } from "./../services/music";
export default {
  data() {
    return {
      playlist: [],
      i: 0,
      urllist: [],
      ip: 0
    };
  },
  methods: {
    // 下一首
    nextmusic() {
      if (this.i + 1 == this.playlist.length) {
        this.i = 0;
      } else {
        this.i++;
      }
      this.ip = this.urllist.findIndex(item => {
        return item.id == this.playlist[this.i].id;
      });
      console.log("下一首");
    },
    // 上一首
    premusic() {
      if (this.i == 0) {
        this.i = this.playlist.length - 1;
      } else {
        this.i--;
      }
      this.ip = this.urllist.findIndex(item => {
        return item.id == this.playlist[this.i].id;
      });
      console.log("上一首");
    }
  },
  async created() {
    this.playlist = this.$route.query.all;
    let id = "";
    for (let a = 0; a < this.playlist.length; a++) {
      if (a == 0) {
        id += this.playlist[a].id;
      } else {
        id += "," + this.playlist[a].id;
      }
    }
    getmusicurl(id).then(res => {
      this.urllist = res.data.data;
      this.ip = this.urllist.findIndex(item => {
        return item.id == this.playlist[0].id;
      });
    });
    console.log(this.playlist);
  }
};
</script>
<style scoped>
.contentwrap {
  margin-top: -60px;
}
p {
  text-align: center;
}
</style>

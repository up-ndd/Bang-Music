<template>
  <div class="sou">
    <header>
      <van-nav-bar
        left-text="返回"
        @click-left="onClickLeft"
        left-arrow
        style="height:100%;line-height:60px;"
      ></van-nav-bar>
    </header>
    <div class="suo">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
        class="search_site"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <ul id="xuanran">
      <li v-for="(p,i) in list" :key="i">
        <router-link
          :to="{
            name:'playmusic',
            query:{
              all:[p]
            }
          }"
        >
          <span class="paixu">{{i+1}}</span>.
          <span class="geming">{{p.name}}</span>
          <p class="geshou">{{p.artists[0].name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
 <script>
import axios from "axios";
export default {
  data() {
    return {
      value: "",
      list: []
    };
  },
  methods: {
    onSearch() {},
    onClickLeft() {
      window.history.go(-1);
    }
  },
  watch: {
    value() {
      if (this.value) {
        axios
          .get("https://net-music.penkuoer.com/search?", {
            params: {
              keywords: this.value
            }
          })
          .then(res => {
            this.list = res.data.result.songs;
            for (let a = 0; a < this.list.length; a++) {
              this.list[a].ar = [{ name: this.list[a].artists[0].name }];
              this.list[a].al = { picUrl: this.list[a].album.artist.img1v1Url };
              this.list[a].dt = this.list[a].duration;
            }
          });
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.suo {
  width: 70%;
  height: 50px;
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 100000;
}
.sou ul {
  position: absolute;
  width: 70%;
  height: 50px;
  list-style: none;
  display: block;
}
#xuanran li {
  padding: 10px;
  box-sizing: border-box;
  float: left;
  width: 100%;
}
.paixu {
  display: inline-block;
  width: 30px;
  text-align: center;
}
.geshou {
  text-indent: 40px;
  width: 328px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: darkgray;
  font-size: 14px;
}
</style>
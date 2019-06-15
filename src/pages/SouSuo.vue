<template>
  <div class="sou">
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
          <span>{{i+1}}</span>、
          <span>{{p.name}}</span>
          <p>{{p.artists[0].name}}</p>
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
    onSearch() {}
  },
  watch: {
    value() {
      if (this.value) {
        axios
          .get("http://10.8.155.18:3000/search?", {
            params: {
              keywords: this.value
            }
          })
          .then(res => {
            // console.log(res.data);
            this.list = res.data.result.songs;
            console.log(this.list);
            for (let a = 0; a < this.list.length; a++) {
              this.list[a].ar = [{ name: this.list[a].artists[0].name }];
              this.list[a].al = { picUrl: this.list[a].album.artist.img1v1Url };
            }
            console.log(this.list);
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
  margin-top: -40px;
  width: 100%;
  height: 50px;
}
.sou input {
  height: 50px;
  width: 70%;
  margin-left: 30px;
  border: 1px solid #5a9edb;
  float: left;
  position: relative;
}
.sou .dian {
  height: 50px;
  width: 50px;
  border: 1px solid #5a9edb;
  float: left;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
}
.sou ul {
  position: absolute;
  width: 70%;
  height: 50px;
  list-style: none;
  display: block;
}
#xuanran li {
  line-height: 30px;
  padding-left: 10px;
  box-sizing: border-box;
  float: left;
  width: 100%;
}
p {
  color: darkgrey;
  padding-left: 40px;
}
</style>
<template>
  <div>
    <header>
      <van-nav-bar
        title="个人中心"
        left-text="返回"
        @click-left="onClickLeft"
        left-arrow
        style="height:100%;line-height:60px;"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <div>
      <!-- 我喜欢的音乐 -->
      <div class="like">
        <router-link :to="{name:'Like'}">
          <van-icon
            name="like-o"
            size="30px"
            style="line-height:60px;float:left;margin:0 20px"
            color="#5a9edb"
          />
          <span>我喜欢的音乐</span>
          ({{count1}})
        </router-link>
      </div>
      <!-- 我收藏的MV -->
      <div class="colloce">
        <router-link :to="{name:'Colloce'}">
          <van-icon
            name="star-o"
            size="30px"
            color="#5a9edb"
            style="line-height:60px;float:left;margin:0 20px"
          />
          <span>我收藏的MV</span>
          ({{count2}})
        </router-link>
      </div>
      <!-- 我收藏的歌单 -->
      <div class="songs">
        <router-link :to="{name:'Songs'}">
          <van-icon
            name="star-o"
            size="30px"
            color="#5a9edb"
            style="line-height:60px;float:left;margin:0 20px"
          />
          <span>我收藏的歌单</span>
          ({{count}})
        </router-link>
      </div>
      <!-- 最近播放音乐 -->
      <div class="broadcast">
        <router-link :to="{name:'Broadcast'}">
          <van-icon
            name="music-o"
            size="30px"
            color="#5a9edb"
            style="line-height:60px;float:left;margin:0 20px"
          />
          <span>最近播放的音乐</span>
        </router-link>
      </div>
    </div>

    <footer>
      <van-tabbar v-model="active" inactive-color="#000" route="true" active-color="#5a9edb">
        <van-tabbar-item icon="contact" to="Personal">
          <span class="footername">我的</span>
        </van-tabbar-item>
        <van-tabbar-item icon="wap-home" to="/">
          <span class="footername">首页</span>
        </van-tabbar-item>
        <van-tabbar-item icon="tv-o" to="Video">
          <span class="footername">视频</span>
        </van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>
<script>
import { shoucanggedanreturn } from "./../services/music";
import { likelistreturn } from "./../services/music";
import { collectreturn } from "./../services/music";
export default {
  data() {
    return {
      active: 0,
      count: 0,
      count1: 0,
      count2: 0
    };
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    }
  },
  created() {
    shoucanggedanreturn().then(result => {
      console.log(result);
      this.count = result.data.playlist.length - 1;
      //console.log(this.count);
    });
    likelistreturn().then(result => {
      console.log(result);
      this.count1 = result.data.ids.length;
    });
    collectreturn().then(result => {
      console.log(result);
      this.count2 = result.data.length;
    });
  }
};
</script>
<style scoped>
.like {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid gray;
  line-height: 60px;
}
.like span {
  line-height: 60px;
  font-size: 18px;
  display: block;
  float: left;
  margin: 0 15px;
}
.colloce {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid gray;
  line-height: 60px;
}
.colloce span {
  line-height: 60px;
  font-size: 18px;
  display: block;
  float: left;
  margin: 0 15px;
}
.songs {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid gray;
  line-height: 60px;
}
.songs span {
  line-height: 60px;
  font-size: 18px;
  display: block;
  float: left;
  margin: 0 15px;
}
.broadcast {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid gray;
  line-height: 60px;
}
.broadcast span {
  line-height: 60px;
  font-size: 18px;
  display: block;
  float: left;
  margin: 0 15px;
}
</style>
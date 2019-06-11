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
      <!-- 我喜欢的音乐 -->
      <div class="like">
        <router-link :to="{name:'Like'}">我喜欢的音乐</router-link>
      </div>
      <!-- 我收藏的MV -->
      <div class="colloce">
        <router-link :to="{name:'Colloce'}">我收藏的MV</router-link>
      </div>
      <!-- 我收藏的歌单 -->
      <div class="songs">
        <router-link :to="{name:'Songs'}">我收藏的歌单</router-link>
      </div>
      <!-- 最近播放音乐 -->
      <div class="broadcast">
        <router-link :to="{name:'Broadcast'}">最近播放的音乐</router-link>
      </div>
    </div>

    <footer>
      <router-link :to="{name:'playmusic'}">音乐播放位置</router-link>
    </footer>
  </div>
</template>
<style scoped>
.like {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid gray;
  line-height: 60px;
}
.colloce {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid gray;
  line-height: 60px;
}
.songs {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid gray;
  line-height: 60px;
}
.broadcast {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid gray;
  line-height: 60px;
}
</style>
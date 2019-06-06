<template>
  <div>
    <header>
      <router-link :to="{name:'Personal'}">我的</router-link>
      <router-link :to="{name:'Home'}">首页</router-link>
      <router-link :to="{name:'Video'}">视频</router-link>
    </header>
    <div>
      <!-- 我喜欢的音乐 -->
      <!-- 我收藏的MV -->
      <!-- 我收藏的歌单 -->
      <!-- 最近播放音乐 -->
    </div>

    <footer>
      <router-link :to="{name:'playmusic'}">音乐播放位置</router-link>
    </footer>
  </div>
</template>
<template>
  <div>
    <header>
      <router-link :to="{name:'Personal'}">我的</router-link>
      <router-link :to="{name:'Home'}">首页</router-link>
      <router-link :to="{name:'Video'}">视频</router-link>
    </header>
    <div>
      <h1>视频页</h1>
    </div>
    <footer>
      <router-link :to="{name:'playmusic'}">音乐播放位置</router-link>
    </footer>
  </div>
</template>
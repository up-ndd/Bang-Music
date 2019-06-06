<template>
  <div>
    <header>
      <router-link :to="{name:'Personal'}">个人中心</router-link>
      <router-link :to="{name:'Home'}">首页</router-link>
      <router-link :to="{name:'Video'}">视频</router-link>
    </header>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="http://p1.music.126.net/HwiCEyYhzBZq6dEa5eKjjg==/109951164125071146.jpg" alt>
        <h1>轮播图1</h1>
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://p1.music.126.net/HwiCEyYhzBZq6dEa5eKjjg==/109951164125071146.jpg" alt>
        <h1>轮播图2</h1>
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://p1.music.126.net/HwiCEyYhzBZq6dEa5eKjjg==/109951164125071146.jpg" alt>
        <h1>轮播图3</h1>
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://p1.music.126.net/HwiCEyYhzBZq6dEa5eKjjg==/109951164125071146.jpg" alt>
        <h1>轮播图4</h1>
      </van-swipe-item>
    </van-swipe>
    <footer>
      <router-link :to="{name:'playmusic'}">音乐播放位置</router-link>
    </footer>
  </div>
</template>
<style>
img {
  height: 90px;
  width: 100%;
}
</style>
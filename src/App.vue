<template>
  <div id="app">
    <header>
      <router-link :to="{name:'H'}">个人中心</router-link>
      <router-link :to="{name:'P'}">首页</router-link>
      <router-link :to="{name:'V'}">视频</router-link>
    </header>
    <div class="main">
      <router-view></router-view>
    </div>
    <footer>音乐播放位置</footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from "./components/Home";
import Personal from "./components/Personal";
import Viode from "./components/Viode";
export default {
  name: "app",
  components: {
    //所有的组件
    // HelloWorld
    Home,
    Personal,
    Viode
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app header {
  height: 60px;
  width: 100%;
  background: linear-gradient(rgb(57, 154, 184), rgb(56, 231, 222));
  flex-shrink: 0;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#app footer {
  height: 60px;
  width: 100%;
  background: linear-gradient(rgb(81, 175, 167), rgb(67, 155, 75));
  flex-shrink: 0;
}
.main {
  flex: 1;
  overflow: auto;
}
</style>

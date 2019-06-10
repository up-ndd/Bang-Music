<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app header {
  height: 60px;
  width: 100%;
  background: linear-gradient(rgb(57, 154, 184), rgb(56, 231, 222));
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
}
#app footer {
  height: 60px;
  width: 100%;
  background: linear-gradient(rgb(81, 175, 167), rgb(67, 155, 75));
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.main {
  margin-top: 62px;
}
a {
  color: black;
}
</style>

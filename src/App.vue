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
  z-index: 101;
  position: fixed;
  top: -2px;
  left: 0;
}
#app footer {
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
.main {
  margin-top: 50px;
  height: 100%;
}
.main > div {
  min-height: 100%;
  background: rgb(253, 253, 253);
}
a {
  color: black;
}
</style>

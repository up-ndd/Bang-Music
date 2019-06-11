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
  background: linear-gradient(rgb(94, 224, 218), rgb(176, 240, 234));
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
}
#app footer {
  height: 60px;
  width: 100%;
  background: linear-gradient(rgb(176, 240, 234), rgb(94, 224, 218));
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.main {
  margin-top: 62px;
  height: 100%;
}
.main > div {
  background: linear-gradient(rgb(253, 253, 253), rgb(233, 225, 225));
  min-height: 100%;
}
a {
  color: black;
}
</style>

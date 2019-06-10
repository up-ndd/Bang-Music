<template>
  <div class="s">
    <h1>我收藏的歌曲</h1>
    <!-- <ul>
      <li v-for="i in songlist" :key:"i">
        <router-link >
          <h5>{{i}}</h5>
        </router-link>
      </li>
    </ul>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      songlist: []
    };
  },
  async creaded() {}
};
</script>
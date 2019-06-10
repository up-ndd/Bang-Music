<template>
  <div id="collect">
    <h1>我收藏的MV</h1>
    <ul>
      <li v-for="i in collects" :key="i.id">
        <router-link
          :to="{
            name:'ColloceDatile',
            query:{
              id:i.id,
              name:i.name,
              r:Math.random()*1000
            },
            params:{
              id:i.id
            }
          }"
        >
          <h5>{{i.title}}</h5>
          <img src="i.coverUrl" alt="i.title" style="height:100px;width:100px">
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { collectreturn } from "./../services/music";
export default {
  data() {
    return {
      collects: []
    };
  },
  async created() {
    const result = await collectreturn();
    console.log(result);
    this.collects = result.data.data;
    console.log(result.data.data);
  }
};
</script>

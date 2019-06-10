<template>
  <div id="collect">
    <ul>
      <h3>MV收藏页</h3>
      <li v-for="(i,a) in collects" :key="a">
        <router-link
          :to="{
            name:'ColloceDatile',
            query:{
              id:i.vid,
              name:i.name,
              r:Math.random()*1000
            },
            params:{
              id:i.id
            }
          }"
        >
          <h5>{{i.title}}</h5>
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
    // console.log(result);
    this.collects = result.data.data;
    // console.log(this.collects);
  }
};
</script>

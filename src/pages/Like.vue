<template>
  <div id="likemusiclist">
    <h1>我喜欢的音乐</h1>
    <ul>
      <li v-for="i in likelist" :key="i.id">
        <router-link
          :to="{
          name:'LikeDatile',
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
          <h5>{{i.name}}</h5>
          <img src="i.picUrl" alt="i.name" style="height:100px;width:100px">
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      likelist: []
    };
  },
  async created() {
    const result = await likelistreturn();
    this.likelist = result.data.data;
  }
};
</script>
<template>
  <div id="collect">
    <header>
      <van-nav-bar
        title="我收藏的MV"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
        @click-right="SousuoHandle"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <img :src="collects[3].coverUrl" style="height:280px;width:100%">
    <ul>
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
          <p>
            {{a+1}}、{{i.title}}
            <span>{{i.creator[0].userName}}</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { collectreturn } from "./../services/music";
// import { ColloceDatile } from "./../services/music";
export default {
  data() {
    return {
      collects: [],
      count: 0
    };
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    },
    collect() {
      this.count = i;
    },
    SousuoHandle() {
      this.$router.push({ name: "SouSuo" });
    }
  },
  async created() {
    const result = await collectreturn();
    console.log(result);
    this.collects = result.data.data;

    this.count = this.collects.length;
  }
};
</script>
<style scoped>
ul {
  margin-top: 25px;
}
li {
  line-height: 50px;
  padding-left: 10px;
  box-sizing: border-box;
  float: left;
  width: 100%;
}
p {
  float: left;
  overflow: hidden;
}
span {
  color: darkgray;
}
</style>
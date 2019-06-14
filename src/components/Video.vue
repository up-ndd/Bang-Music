<template>
  <div>
    <header>
      <van-nav-bar
        title="推荐视频"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
    <div>
      <ul>
        <li v-for=" (a,i) in list" :key="i">
          <img :src="a.cover">
        </li>
      </ul>
    </div>
    <footer>
      <van-tabbar v-model="active" inactive-color="#000" route="true" active-color="#5a9edb">
        <van-tabbar-item icon="contact" to="Personal">
          <span class="footername">我的</span>
        </van-tabbar-item>
        <van-tabbar-item icon="wap-home" to="/">
          <span class="footername">首页</span>
        </van-tabbar-item>
        <van-tabbar-item icon="tv-o" to="Video">
          <span class="footername">视频</span>
        </van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>
<script>
import { videoreturn } from "./../services/music";
import { videoDetalreturn } from "./../services/music";
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    const total = await videoreturn();
    console.log(total.data.data);
    this.list = total.data.data; //显示图片
    console.log(this.list[0].id);
    this.list.forEach(element => {
      // console.log(element.id);
      const uid = videoDetalreturn(element.id);
      console.log(uid);
    });
    // const dizhi = new videoDetalreturn(id);
    // console.log(dizhi);
  }
};
</script>
<style scoped>
img {
  width: 90%;
  height: 10rem;
  margin: 0.5rem 1rem;
}
</style>


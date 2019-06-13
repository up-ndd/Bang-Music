<template>
  <div>
    <header>
      <van-nav-bar
        title="评论"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
      >
        <van-icon name="search" slot="right" size="24px"/>
      </van-nav-bar>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    }
  }
};
</script>
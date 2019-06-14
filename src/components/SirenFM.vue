<template>
  <div>
    <header>
      <van-nav-bar
        title="私人FM"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="height:100%;line-height:60px;"
        @click-right="SousuoHandle"
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
    },
    SousuoHandle() {
      this.$router.push({ name: "SouSuo" });
    }
  }
};
</script>
<style scoped>
</style>
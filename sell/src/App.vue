<template>
  <div id="app">
    <div class="header">
      <v-header></v-header>
    </div>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">
      i am content
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue';

  export default{
    components: {
      'v-header':header
    }
  };
</script>

<style lang="stylus">
  #app
    .tab
      display: flex
      width 100%
      line-height: 40px
      height: 40px
      .tab-item
        flex: 1
        text-align: center
</style>

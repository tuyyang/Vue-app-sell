<template>
  <div class="loading">
<<<<<<< HEAD
    <img src="./loading.gif" width="24" height="24" />
=======
    <img width="24" height="24" scr="./loading.gif" />
>>>>>>> recommend
    <p class="desc">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~common/stylus/variable'

  .loading
    width 100%
    text-align center
    .desc
      line-height 20px
      font-size $font-size-small
<<<<<<< HEAD
      color $color-text-1
=======
      color $color-text-l
>>>>>>> recommend
</style>

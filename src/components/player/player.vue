<template>
  <div class="player" v-show="playlist.length > 0">
    <div class="normal-player" v-show="fullScreen">
      <div class="background">
        <img width="100%" height="100%" />
      </div>
      <div class="top">
        <div class="back">
          <i class="icon-back"></i>
        </div>
        <h1 class="title"></h1>
        <h2 class="subtitle"></h2>
      </div>
      <div class="middle"></div>
      <div class="bottom"></div>
    </div>
    <div class="mini-player" v-show="!fullScreen">
      <div class="icon">
        <img width="40" height="40" />
      </div>
      <div class="text">
        <h2 class="name"></h2>
        <p class="desc"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fullScreen',
      'playlist'
    ])
  }
}
</script>

<style lang='stylus' scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'

  .player
    .normal-player
      position fixed
      left 0
      right 0
      top 0
      bottom 0
      z-index 777
      background $color-background
</style>

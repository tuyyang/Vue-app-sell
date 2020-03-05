<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
<<<<<<< HEAD
=======

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'
>>>>>>> recommend

export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
<<<<<<< HEAD
      })
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollTo () {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
=======
        // eventPassthrough: this.direction === DIRECTION_V ? DIRECTION_H : DIRECTION_V
      })
      
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }
    }
  },
  disable () {
    this.scroll && this.scroll.disable()
  },
  enable () {
    this.scroll && this.scroll.enable()
  },
  refresh () {
    this.scroll && this.scroll.refresh()
  },
  scrollTo () {
    this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
  },
  scrollToElement () {
    this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
>>>>>>> recommend
  }
}
</script>

<style lang='stylus' scoped></style>

<template>
  <div class="singer" ref="singer">
    <list-view @select="selectSinger" :data="singers"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
import ListView from 'base/listview/listview'
import Singer from 'common/js/singer'
import { getSingerList } from 'api/singer'
import { ERR_OK } from 'api/config'
import { mapMutations } from 'vuex'

<<<<<<< HEAD
const HOT_SINGER_LEN = 10
const HOT_NAME = '热门'
=======
const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10
>>>>>>> recommend

export default {
  data () {
    return {
      singers: []
    }
  },
  created () {
    this._getSingerList()
  },
  methods: {
    selectSinger (singer) {
      this.$router.push({
        path: `/singer/${singer.id}`
      })
      this.setSinger(singer)
    },
    _getSingerList () {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singers = this._normalizeSinger(res.data.list)
<<<<<<< HEAD
=======
          // console.log(this._normalizeSinger(this.singers))
>>>>>>> recommend
        }
      })
    },
    _normalizeSinger (list) {
<<<<<<< HEAD
      let map = {
=======
      const map = {
>>>>>>> recommend
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
<<<<<<< HEAD
            name: item.Fsinger_name,
            id: item.Fsinger_mid
=======
            id: item.Fsinger_mid,
            name: item.Fsinger_name
>>>>>>> recommend
          }))
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
<<<<<<< HEAD
          name: item.Fsinger_name,
          id: item.Fsinger_mid
        }))
      })
      // 为了得到有序列表，我们需要处理 map
      let ret = []
      let hot = []
      for (let key in map) {
        let val = map[key]
=======
          id: item.Fsinger_mid,
          name: item.Fsinger_name
        }))
      })
      const ret = []
      const hot = []
      for (const key in map) {
        const val = map[key]
>>>>>>> recommend
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  },
  components: {
    ListView
  }
}
</script>

<style lang='stylus' scoped>
  .singer
    position fixed
    top 88px
    bottom 0
    width 100%
</style>

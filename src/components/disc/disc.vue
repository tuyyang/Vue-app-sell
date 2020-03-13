<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
import MusicList from 'components/music-list/music-list'
import { getSongList } from 'api/recommend'
import { ERR_OK } from 'api/config'
import { createSong, isValidMusic } from 'common/js/song'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      songs: []
    }
  },
  created () {
    this._setSongList()
  },
  methods: {
    _setSongList () {
      if (!this.disc.dissid) {
        this.$router.push('/recommend')
        return
      }
      getSongList(this.disc.dissid).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSong(res.cdlist[0].songlist)
          console.log(this.songs)
        }
      })
    },
    _normalizeSong (list) {
      const ret = []
      list.forEach((musicData) => {
        if (isValidMusic(musicData)) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  computed: {
    title () {
      return this.disc.dissname
    },
    bgImage () {
      return this.disc.imgurl
    },
    ...mapGetters([
      'disc'
    ])
  },
  components: {
    MusicList
  }
}
</script>

<style lang='stylus' scoped></style>
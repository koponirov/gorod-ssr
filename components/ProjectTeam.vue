<template lang="pug">
  div.members(ref="a" id="members"  )
    carousel(
      name="team"
      :items-to-show="4"
      :initial-slide="0"
      :infinite-scroll="true"
      :loaded="loaded"
      :wheel-control="false"
      h="515px"
      W="1140px"
      :items="items"
    )
      template(v-slot="{item , index}")
        card(:item="item" :index="index" :idx="idx" @change-idx="changeIdxParent" )


    // Модальное окно
    modal-card(:items="items" :idx="idx" @close-modal="closeModal")




</template>

<script>
import SvgIcon from './SvgIcon'
import Carousel from './Carousel'
import Card from './MemberCard'
import ModalCard from './MemberModalCard'

export default {
  components: {
    ModalCard,
    SvgIcon,
    Carousel,
    Card
  },
  data() {
    return {
      items: [],
      count: 0,
      loaded: false,
      show: false,
      idx: -1,
      locale: this.$i18n.locale,
    }
  },

  methods: {
    getTeam() {
      fetch(`/team/${this.$i18n.locale}.json`)
          .then(res => res.text())
          .then(res => {
            this.items = JSON.parse(res.replace(/\n/g, '')).items
            this.count = Math.round(this.$refs.a.clientWidth / 284);
          })
    },

    changeIdxParent(idx) {
      this.idx = idx
    },
    closeModal( idx ) {
      this.idx = idx
    },
    check() {
      const top = this.$refs.a.getBoundingClientRect().top;
      this.show = top < window.innerHeight;
      if (this.show && (!this.loaded || this.locale !== this.$i18n.locale)) {
        this.getTeam()
        this.loaded = true
        this.locale = this.$i18n.locale
      }
    }
  },

  mounted() {
    const top = this.$refs.a.getBoundingClientRect().top;
    this.show = top < window.innerHeight;
    const evl = window.addEventListener('scroll', this.check)

  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.check)
  }
}
</script>

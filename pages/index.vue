<template lang="pug">
  #app
    section-header
    section-video
    section-top
    section-patents
    section-stream
    section-news
    section-team
    section-committee
    section-future
    section-footer


</template>

<script>
import SectionHeader from "~~/components/section-header-gorod";
import SectionVideo from "~~/components/section-video";
import SectionTop from "~~/components/section-gorod-levels";
import SectionPatents from "~~/components/section-patents";
import SectionStream from "~~/components/section-stream";
import SectionNews from "~~/components/section-news";
import SectionTeam from "~~/components/section-project-team";
import SectionCommittee from "~~/components/section-project-commitee";
import SectionFuture from "~~/components/section-future";
import SectionFooter from "~~/components/section-footer";
import Vue from "vue";
import VueCookies from "vue-cookies";


export default {
  components: {
    SectionHeader,
    SectionVideo,
    SectionTop,
    SectionPatents,
    SectionStream,
    SectionNews,
    SectionTeam,
    SectionCommittee,
    SectionFuture,
    SectionFooter
  },
  data() {
    return {
      redirect: '',
      scriptPath: {
        en: 'https://code.jivosite.com/widget/9dJyrHrlqN',
        ru: 'https://code.jivosite.com/widget/Tv5TjbEYf1',
        de: 'https://code.jivosite.com/widget/rZLKOyIJDm',
        fr: 'https://code.jivosite.com/widget/GF30SYILvm'
      }
    }
  },

  mounted() {

    const jivoScript = document.createElement('script')
    jivoScript.async = true
    jivoScript.type = "text/javascript"
    jivoScript.src = this.scriptPath[this.$i18n.getLocaleCookie()]
    document.head.appendChild(jivoScript)

    jivoScript.onload = function () {
      window.jivo_init()
    }

  },
  beforeDestroy() {
    console.log('destr')
    //window.jivo_destroy()
  },
  destroyed() {

  }

}
</script>

<style>

</style>

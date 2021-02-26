<template lang="pug">
  #app
    section-header
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
import SectionTop from "~~/components/section-gorod-levels-test";
import SectionPatents from "~~/components/section-patents";
import SectionStream from "~~/components/section-stream";
import SectionNews from "~~/components/section-news";
import SectionTeam from "~~/components/section-project-team";
import SectionCommittee from "~~/components/section-project-commitee";
import SectionFuture from "~~/components/section-future";
import SectionFooter from "~~/components/section-footer";



export default {
  components: {
    SectionHeader,
    SectionTop,
    SectionPatents,
    SectionStream,
    SectionNews,
    SectionTeam,
    SectionCommittee,
    SectionFuture,
    SectionFooter
  }
}
</script>

<style>

</style>

<template lang="pug">
section.section-news
  div.container
    h2.title(v-html="$t('newsTitle')")

    div.articles
      h3(v-html="$t('newsArticles')")
      section-news-articles



</template>

<script>

import SectionNewsArticles from './section-news-articles'


export default {
    components: {
        SectionNewsArticles, //: () => import(/* webpackChunkName: "sec-16-news-articles" */ './16-section-news-articles'),
    }
}
</script>

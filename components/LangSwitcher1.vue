<template >
  <div class="wrapper" :class="{open}" @click='open=!open'>
    <div class="selected">
      <img :src="require(`@/assets/img/language/${$i18n.locale}.png`)" class="img"/>
      <span> {{ $i18n.locale }} </span>
      <ul class="options">

          <nuxt-link :to="switchLocalePath(locale.code)" :key="locale.code" v-for='locale in availableLocales' @click="setCookieLang">
            <li class="option" >
              <img :src="require(`@/assets/img/language/${locale.code}.png`)" class="img"/>
              {{ locale.name }}
            </li>
          </nuxt-link>

      </ul>


    </div>

  </div>

</template>

<script>
//import {loadLanguageAsync} from '../i18n-setup'



import Vue from "vue";

export default {

  data() {
    return {
      id: 'ru',
      open: false,
      options: [
        {id: 'ru', name: 'Русский'},
        {id: 'en', name: 'English'},
        {id: 'de', name: 'Deutsch'},
        {id: 'fr', name: 'Le français'}
      ],
      loadedLang: null,
      langs: [
        {name: 'en', path: '//code.jivosite.com/widget/9dJyrHrlqN'},
        {name: 'ru', path: '//code.jivosite.com/widget/Tv5TjbEYf1'},
        {name: 'de', path: '//code.jivosite.com/widget/rZLKOyIJDm'},
        {name: 'fr', path: '//code.jivosite.com/widget/GF30SYILvm'}
      ],
    }
  },
  props: [
    'refresh'
  ],

  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    selectedId() {
      // return this.$root.$i18n.locale.substr(0, 2)
      return 'fr'
    },
    selectedLangImg() {
      return require(`@/assets/img/language/${this.id}.png`)
    },
    langsListImg(option) {

      return require(`@/assets/img/language/${option.id}.png`)
    }
  },

  methods: {
    select(id) {
      this.id = id
      // //загрузка языка
      // loadLanguageAsync(v)
      // //загрузка скрипта jivoSite с текущим языком
      // this.loadScript(v)
    },
    setCookieLang() {

    }
    // loadScript(lang) {
    //
    //     //удаление ранее загруженного скрипта если язык не соответствует текущему
    //     if (this.loadedScriptLang && this.loadedScriptLang != lang) {
    //         this.unloadScript()
    //     }
    //
    //     const currentLang = this.langs.filter(i => i.name === lang)[0]
    //
    //     this.loadedScriptLang = currentLang
    //
    //
    //
    //     this.$loadScript(currentLang.path)
    //         .then(() => {
    //             // Script is loaded, do something
    //             console.log('Script is loaded')
    //             window.jivo_init()
    //         })
    //         .catch(() => {
    //             // Failed to fetch script
    //             console.log('Failed to fetch script')
    //         });
    //
    // },
    // unloadScript () {
    //     this.$unloadScript(this.loadedScriptLang.path)
    //         .then(() => {
    //             // Script was unloaded successfully
    //             console.log("jivoSite script was unloaded successfully")
    //             window.jivo_destroy()
    //         })
    //         .catch(() => {
    //             // Script couldn't be found to unload; make sure it was loaded and that you passed the same URL
    //             console.error('jivoSite script couldn\'t be found to unload')
    //         });
    // }
  },
  mounted() {
      // //загрузка скрипта при первой отрисовке
      // this.loadScript(this.$i18n.locale)

  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 50px;

  cursor: pointer;

  &.open {
    .options {
      display: block;
    }
  }

  .img {
    display: block;
    margin-right: 10px;
  }

  .selected {
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;
    line-height: 42px;
    background: transparent;
    text-transform: uppercase;
  }

  .options {
    display: none;
    position: absolute;
    right: 0;
    top: 42px;
    width: 130px;
    list-style-type: none;
    background: lighten(#1b1b28, 5%);
    color: #fff;

    .option {
      display: flex;
      align-items: center;
      line-height: 50px;
      padding: 0 10px;

      &:hover {
        background: lighten(#1b1b28, 10%);
      }
    }

    z-index: 100;
  }
}
</style>



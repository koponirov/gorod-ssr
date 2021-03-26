import i18n from "./gorod-ssr/config/i18n";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GOROD',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Инвестируй в новые технологии на рынке градостроительства на выгодных для вас условиях' },
      { name: 'keywords', content: 'gorod, город, инновация, патент, денис, тяглин, транспотно, логистическая, система' },
      { property: "og:site_name", content: "GOROD" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css',
    './assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/youtube',
    '@/plugins/scrollView',
    { src: '~/plugins/i18n.js' }

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ["@nuxtjs/svg"],
    [
      'nuxt-i18n',
      {
        seo: true,
        vueI18nLoader: true,
        defaultLocale: 'fr',
        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en-US'
          },
          {
            code: 'fr',
            name: 'Français',
            iso: 'fr-FR'
          },
          {
            code: 'de',
            name: 'Deutsch',
            iso: 'de-DE'
          },
          {
            code: 'ru',
            name: 'Русский',
            iso: 'ru-RU'
          }
        ],
        vueI18n: i18n,
        strategy: 'prefix',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true,  // recommended
        }
      },
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ["@nuxtjs/svg"],

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

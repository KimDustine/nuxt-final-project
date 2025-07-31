import colors from 'vuetify/es5/util/colors'

export default {
  // ✅ Required for static site generation (Vercel-compatible)
  target: 'static',

  // ✅ Disable server-side rendering
  ssr: false,

  // ✅ HTML head
  head: {
    titleTemplate: '%s - my-finals-pluginsss',
    title: 'my-finals-pluginsss',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // ✅ Global CSS (optional)
  css: [],

  // ✅ Plugins (Geolocation plugin is loaded here)
  plugins: ['~/plugins/geolocation.js'],

  // ✅ Auto import components
  components: true,

  // ✅ Vuetify module
  buildModules: ['@nuxtjs/vuetify'],

  // ✅ Other Nuxt modules (none for now)
  modules: [],

  // ✅ Vuetify theme setup
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // ✅ Build config
  build: {}
}

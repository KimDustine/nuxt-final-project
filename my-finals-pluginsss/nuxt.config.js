export default {
  // ✅ Required for Vercel static hosting
  target: 'static',
  ssr: false, // SPA mode

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

  css: [],

  plugins: ['~/plugins/geolocation.js'],

  components: true,

  buildModules: ['@nuxtjs/vuetify'],

  modules: [],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#1976D2',
          accent: '#424242',
          secondary: '#FFC107',
          info: '#26A69A',
          warning: '#FFC107',
          error: '#FF5252',
          success: '#4CAF50'
        }
      }
    }
  },

  build: {}
}

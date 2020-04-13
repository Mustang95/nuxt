import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
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
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  // router: {
  //   extendRoutes (routes, resolve) {
  //     const indexIndex = routes.findIndex(route => route.name === 'index')
  //     let index = routes[indexIndex].children.findIndex(route => route.name === 'index-child-id')
  //     routes[indexIndex].children[index] = {
  //       ...routes[indexIndex].children[index],
  //       components: {
  //         default: routes[indexIndex].children[index].component,
  //         left: resolve(__dirname, 'components/childLeft.vue')
  //       },
  //       chunkNames: {
  //         left: 'components/childLeft'
  //       }
  //     }

  //     index = routes.findIndex(route => route.name === 'main')
  //     routes[index] = {
  //       ...routes[index],
  //       components: {
  //         default: routes[index].component,
  //         top: resolve(__dirname, 'components/mainTop.vue')
  //       },
  //       chunkNames: {
  //         top: 'components/mainTop'
  //       }
  //     }
  //   }
  // }
}

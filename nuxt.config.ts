export default defineNuxtConfig({
  experimental: { appManifest: false },
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'La Salle University - Ozamiz',
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css",
        },
        // {
        //   rel: "stylesheet",
        //   href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css",
        // },
        {
          rel: "stylesheet",
          href: "/css/flickity.min.css",
        },
      ],
      script: [
        // {
        //   src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
        // },
        {
          src: "/js/flickity.pkgd.min.js"
        },
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          'data-ad-client': 'ca-pub-2783005418884897',
          async: true
        }
      ]
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleSignIn: {
    clientId: '818409831356-g3thpiuagqs1oj6sh1bk6j1c25j2m2mk.apps.googleusercontent.com'
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  modules: [
    'nuxt-vue3-google-signin',
    '@pinia/nuxt',
    'nuxt-lodash',
    '@nuxtjs/google-adsense'
  ],
  googleAdsense: {
    id: 'ca-pub-2783005418884897'
  },
  nitro: {
    prerender: {
      failOnError: false,
    }
  }
  // routeRules: { '/': {ssr: false} }
  //   "Content-Type": "multipart/form-data",
  // 'Content-Type': 'application/json',
  // 'Accept': 'application/json',
});
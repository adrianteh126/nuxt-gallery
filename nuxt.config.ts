export default defineNuxtConfig({
  alias: {
    assets: '/<rootDir>/assets',
    composables: '/<rootDir>/composables'
  },
  app: {
    head: {
      title: 'Nuxt Gallery',
      meta: [
        {
          name: 'description',
          content:
            'A Nuxt 3 project that shows images, user can like on the images.'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    }
  },
  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/css/main.css'],
  devtools: { enabled: false },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    SERVICE_KEY: process.env.SERVICE_KEY,
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
    }
  },
  ssr: false,
  typescript: {
    typeCheck: true
  }
})

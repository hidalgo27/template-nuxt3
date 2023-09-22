// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  piniaPersistedstate: {
    storage: 'localStorage'
  },
// @ts-ignore
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    '@/assets/css/main.css',
    '@/assets/css/page.css',
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_TEST || "http://localhost:6060/",
    }
  },
})

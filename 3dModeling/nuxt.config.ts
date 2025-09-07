// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['cesium/Build/Cesium/Widgets/widgets.css'],
  vite: {
    define: {
      CESIUM_BASE_URL: JSON.stringify('/cesium')
    }
  }
})

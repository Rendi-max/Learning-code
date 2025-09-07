// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  devServer: {
    port: 3000,
  },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/animation.css",
    // "~/assets/icomoon/style.css",
    // "vue3-colorpicker/style.css",
    // "v-calendar/style.css",
  ],

  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },

  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/fontaine",
    "@nuxtjs/google-fonts",
    "@nuxt/ui",
    "@pinia/nuxt",
    // "nuxt-security",
    "@nuxtjs/leaflet",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    dirs: [
      {
        path: "@/components/global",
        pathPrefix: false,
        global: true,
      },
    ],
  },
  fontMetrics: {
    fonts: ["Inter", "Rajdhani"],
  },
});

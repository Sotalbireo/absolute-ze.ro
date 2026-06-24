import tailwindcss from '@tailwindcss/vite'
import pkg from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,

  app: {
    head: {
      charset: 'utf-8',
      title: 'absolute-ze.ro',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'description', content: pkg.name },
        { name: 'author', content: 'info@absolute-ze.ro' },
        { name: 'robots', content: 'none, noarchive' },
        { name: 'google', content: 'notranslate' },
        { name: 'format-detection', content: 'telephone=no, address=no, email=no' },
        { property: 'og:site_name', content: pkg.name },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://absolute-ze.ro/' },
        { property: 'og:title', content: pkg.name },
        { property: 'og:description', content: pkg.description },
        { property: 'og:image', content: 'https://absolute-ze.ro/1f976.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: pkg.name },
        { name: 'twitter:description', content: pkg.description },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  css: [
    '~/assets/tailwind.css',
  ],

  typescript: {
    strict: true,
  },

  nitro: {
    minify: true,
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
})

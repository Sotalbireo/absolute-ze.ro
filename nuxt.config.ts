import { defineNuxtConfig } from 'nuxt'
import pkg from './package.json'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      title: 'absolute-ze.ro',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      meta: [
        { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
        {
          hid: 'description',
          name: 'description',
          content: pkg.name,
        },
        { name: 'author', content: 'info@absolute-ze.ro' },
        { name: 'robots', content: 'none, noarchive' },
        { name: 'google', content: 'notranslate' },
        {
          name: 'format-detection',
          content: 'telephone=no, address=no, email=no',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: pkg.name,
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://absolute-ze.ro/' },
        { hid: 'og:title', property: 'og:title', content: pkg.name },
        {
          hid: 'og:description',
          property: 'og:description',
          content: pkg.description,
        },
        { hid: 'og:image', property: 'og:image', content: 'https://absolute-ze.ro/1f976.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: pkg.name },
        {
          name: 'twitter:description',
          content: pkg.description,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  css: [
    'assets/tailwind.sass',
  ],

  typescript: {
    strict: true,
  },

  nitro: {
    minify: true,
  },

  vite: {
    server: {
      host: true,
      watch: {
        usePolling: true,
      },
    },
  },
})

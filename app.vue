<template>
  <MainContent />
</template>

<script lang="ts" setup>
useMeta({
  htmlAttrs: {
    class: 'notranslate',
    lang: 'en',
    translate: 'no',
    prefix: 'og: http://ogp.me/ns#',
  },
})
</script>

<style lang="sass">
html, body
  @apply antialiased box-border font-sans h-screen w-screen
  font-size: 16px
  text-size-adjust: 100%
  word-spacing: 1px

*,
*:before,
*:after
  @apply box-border m-0
</style>

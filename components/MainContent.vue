<template>
  <div :class="$style.container">
    <h1 v-if="type == 'header'" :class="$style.header">
      {{ text }}
    </h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p v-if="type == 'text'" :class="$style.text" v-html="text" />
  </div>
</template>

<script lang="ts" setup>
const $style = useCssModule()

const records = [
  { type: 'header', value: '−273.15 °C' },
  { type: 'header', value: '559.725 °D' },
  { type: 'header', value: '−459.67 °F' },
  { type: 'header', value: '−90.1395 °N' },
  { type: 'header', value: '0 °R' },
  { type: 'header', value: '−218.52 °Ré' },
  { type: 'header', value: '−135.90375 °Rø' },
  { type: 'header', value: '0 K' },
  { type: 'header', value: '絶対零度' },
  {
    type: 'text',
    value:
      '速攻魔法<br />エクシーズ素材が無い状態のエクシーズモンスター１体を選択して発動できる。<br />このターンのエンドフェイズ時まで、選択したモンスターの攻撃力を０にする。',
  },
  {
    type: 'text',
    value:
      'あいてを いちげきで ひんしに する。<br>こおりタイプ いがいの ポケモンが つかうと あたりにくい。',
  },
]
const pickOne = records[(Math.random() * records.length) >> 0]

const text = ref('')
const type = ref('')

onBeforeMount(() => {
  text.value = pickOne.value
  type.value = pickOne.type
})
</script>

<style lang="sass" module>
.container
  @apply min-h-screen flex justify-center items-center text-center mx-auto

.article
  @apply text-slate-700
  // color: #35495e
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  letter-spacing: 1px

.header
  @apply article block font-bold
  font-size: 5rem

.text
  @apply article text-base
</style>

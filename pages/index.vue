<template>
  <div :class="$style.container">
    <h1 v-if="type == 'title'" :class="$style.title">{{ text }}</h1>
    <p v-if="type == 'text'" :class="$style.text" v-html="text"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

const absoluteZero = [
  { type: 'title', value: '−273.15 °C' },
  { type: 'title', value: '559.725 °D' },
  { type: 'title', value: '−459.67 °F' },
  { type: 'title', value: '−90.1395 °N' },
  { type: 'title', value: '0 °R' },
  { type: 'title', value: '−218.52 °Ré' },
  { type: 'title', value: '−135.90375 °Rø' },
  { type: 'title', value: '0 K' },
  { type: 'title', value: '絶対零度' },
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
const pickOne = absoluteZero[(Math.random() * absoluteZero.length) >> 0]

export default defineComponent({
  setup() {
    const text = ref('')
    const type = ref('')
    onMounted(() => {
      text.value = pickOne.value
      type.value = pickOne.type
    })
    return {
      text,
      type,
    }
  },
})
</script>

<style lang="sass" module>
.container
  @apply min-h-screen flex justify-center items-center text-center mx-auto

.title
  @apply block font-bold
  color: #35495e
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 5rem
  letter-spacing: 1px

.text
  @apply title text-base
</style>

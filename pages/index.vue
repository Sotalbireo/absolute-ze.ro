<template>
  <div :class="$style.container">
    <h1 :class="$style.title">{{ text }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

const absoluteZero = [
  '−273.15 °C',
  '559.725 °D',
  '−459.67 °F',
  '−90.1395 °N',
  '0 °R',
  '−218.52 °Ré',
  '−135.90375 °Rø',
  '0 K',
][(Math.random() * 8) >> 0]

export default defineComponent({
  setup() {
    const text = ref('')
    onMounted(() => {
      text.value = absoluteZero
    })
    return {
      text,
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
</style>

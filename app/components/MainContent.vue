<template>
  <div
    class="min-h-dvh md:max-w-11/12 flex justify-center items-center text-center mx-auto px-2"
  >
    <h1 v-if="type == 'header'" class="header">
      {{ value }}
    </h1>
    <pre v-if="type == 'text'" class="text">
      {{ value }}
    </pre>
    <div
      v-if="type == 'long'"
      class="long text-left space-y-2 xl:max-w-5/6 max-md:mx-4"
    >
      <div v-for="v in value" class="w-full">{{ v }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { records } from "../data/records";

// const pickOne = records[13];
const pickOne = records[(Math.random() * records.length) >> 0];

const value = ref<string | string[]>("");
const type = ref("");

onBeforeMount(() => {
  value.value = pickOne?.value ?? "";
  type.value = pickOne?.type ?? "";
});
</script>

<style scoped>
@reference "../assets/tailwind.css";

.header {
  @apply block font-main;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 5rem;
}

.text {
  @apply font-main whitespace-pre-line wrap-break-word break-all;
  letter-spacing: 1px;
  font-size: 1.4rem;
}

.long {
  @apply font-main whitespace-pre-line wrap-break-word break-all sm:break-keep;
  letter-spacing: 1px;
  font-size: 1.2rem;
}
</style>

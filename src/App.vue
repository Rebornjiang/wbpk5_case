<template>
  <div>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('hello world')

console.log('hello script setup')
</script>

<style lang="scss" scoped>
.title {
  color: #000;
}
</style>

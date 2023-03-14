<template>
  <div>
    <HelloWorld />
    <input type="text" v-model="iv" />
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const iv = ref('')
const title = ref('helldd o wddcv  cvorlddd')

console.log('hello script 111fds setup')
</script>

<style lang="scss" scoped>
.title {
  color: #000;
}
</style>

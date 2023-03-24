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
body {
  background-color: lime;
}
.title {
  color: #000;
  transform: translateX(0);
}
.sddd {
  text-align: center;
  color: lime;
  font-size: 14px;
}

.aaaa {
  box-sizing: border-box;
}
</style>

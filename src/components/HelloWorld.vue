<template>
  <h1>{{ v }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue'
fetch('/api/task/initFlow', {
  method: 'post'
})
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
const v = ref('hello fffff  fworld')
</script>
<style lang="scss" scoped></style>

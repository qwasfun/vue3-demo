<script setup>
import { provide, ref } from 'vue'

import Child from './components/ChildComp.vue'

const count = ref(0)

provide('count', count)
provide('msg', '你好，世界')

const increase = () => {
  count.value++
}
provide('increase', increase)
</script>

<template>
  <Child />
  <p>msg:{{ msg }}</p>
  <p>count:{{ count }}</p>
</template>

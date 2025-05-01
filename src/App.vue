<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const refCount = ref(null)

const increaseChildCount = () => {
  refCount.value.count++
}

const invokeChildIncrease = () => {
  refCount.value.increase()
}
</script>

<template>
  <h1>ref defineExpose</h1>
  <HelloWorld ref="refCount" />

  <button @click="increaseChildCount">从父组件增加count的值 increaseChildCount</button>
  <button @click="invokeChildIncrease">调用子组件中方法 invokeChildIncrease</button>
</template>

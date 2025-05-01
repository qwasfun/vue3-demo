<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
} from 'vue'

onBeforeMount(() => {
  console.log('Comp2 onBeforeMount')
})

onMounted(() => {
  console.log('Comp2 onMounted')
})

onBeforeUpdate(() => {
  console.log('Comp2 onBeforeUpdate')
})

onUpdated(() => {
  console.log('Comp2 onUpdated')
})

onBeforeUnmount(() => {
  console.log('Comp2 onBeforeUnmount')
})

onUnmounted(() => {
  console.log('Comp2 onUnmounted')
})

onActivated(() => {
  console.log('Comp2 onActivated')
})

onDeactivated(() => {
  console.log('Comp2 onDeactivated')
})
</script>

<template>
  <h1>Comp2</h1>
</template>

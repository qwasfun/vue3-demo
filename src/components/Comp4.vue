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
  console.log('Comp4 onBeforeMount')
})

onMounted(() => {
  console.log('Comp4 onMounted')
})

onBeforeUpdate(() => {
  console.log('Comp4 onBeforeUpdate')
})

onUpdated(() => {
  console.log('Comp4 onUpdated')
})

onBeforeUnmount(() => {
  console.log('Comp4 onBeforeUnmount')
})

onUnmounted(() => {
  console.log('Comp4 onUnmounted')
})

onActivated(() => {
  console.log('Comp4 onActivated')
})

onDeactivated(() => {
  console.log('Comp4 onDeactivated')
})
</script>

<template>
  <h1>Comp4</h1>
</template>

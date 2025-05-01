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
  console.log('Comp3 onBeforeMount')
})

onMounted(() => {
  console.log('Comp3 onMounted')
})

onBeforeUpdate(() => {
  console.log('Comp3 onBeforeUpdate')
})

onUpdated(() => {
  console.log('Comp3 onUpdated')
})

onBeforeUnmount(() => {
  console.log('Comp3 onBeforeUnmount')
})

onUnmounted(() => {
  console.log('Comp3 onUnmounted')
})

onActivated(() => {
  console.log('Comp3 onActivated')
})

onDeactivated(() => {
  console.log('Comp3 onDeactivated')
})
</script>

<template>
  <h1>Comp3</h1>
</template>

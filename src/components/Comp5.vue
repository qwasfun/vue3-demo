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
  console.log('Comp5 onBeforeMount')
})

onMounted(() => {
  console.log('Comp5 onMounted')
})

onBeforeUpdate(() => {
  console.log('Comp5 onBeforeUpdate')
})

onUpdated(() => {
  console.log('Comp5 onUpdated')
})

onBeforeUnmount(() => {
  console.log('Comp5 onBeforeUnmount')
})

onUnmounted(() => {
  console.log('Comp5 onUnmounted')
})

onActivated(() => {
  console.log('Comp5 onActivated')
})

onDeactivated(() => {
  console.log('Comp5 onDeactivated')
})
</script>

<template>
  <h1>Comp5</h1>
</template>

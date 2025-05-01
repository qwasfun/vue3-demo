<script setup>
import { ref } from 'vue'
const count = ref(0)
const increase = () => {
  count.value++
}
defineExpose({
  count,
  increase
})
</script>

<template>
  <div>
    <p>count:{{ count }}</p>
    <button @click="increase">increase</button>
  </div>
</template>

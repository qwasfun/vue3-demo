<script setup>
import { ref, computed, watch } from 'vue'
const count = ref(0)
const increase = () => {
  count.value++
}
const double = computed(() => count.value * 2)
watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
</script>

<template>
  <div>
    <div>
      <p>count: {{ count }}</p>
      <p>double: {{ double }}</p>
      <button @click="increase">increase</button>
    </div>
  </div>
</template>

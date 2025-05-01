<script setup>
import Quote from './components/Quote.vue'
</script>

<!-- 默认插槽 -->
<template>
  <h1>slot default</h1>
  <quote>
    <template v-slot:default>
      <h2>标题</h2>
      <p>内容</p>
    </template>
  </quote>
</template>

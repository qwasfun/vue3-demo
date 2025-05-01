<script setup>
import { ref } from 'vue'
import List from './components/List.vue'
const list = ref(['Javascript', 'Vue', 'React', 'Angular'])
</script>

<template>
  <h1>slot scoped</h1>

  <div>作用域插槽</div>
  <List :list="list" v-slot="{ item, index }">
    <b v-if="index % 2">{{ item }}</b>
    <i v-else>{{ item }}</i>
  </List>
</template>

<script setup>
defineProps(['list'])
</script>

<template>
  <ul>
    <li v-for="(item, index) in list" :key="item">
      <slot :item="item" :index="index"></slot>
    </li>
  </ul>
</template>

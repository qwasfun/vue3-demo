<script setup>
import Quote from './components/Quote.vue'
</script>

<!-- 默认插槽 -->
<template>
  <h1>slot name</h1>
  <quote>
    <template v-slot:title>
      <h2>标题</h2>
    </template>
    <template v-slot:content>
      <p>内容</p>
    </template>
    <!-- 除具名插槽以外，其他都是默认插槽，包括 hr, span, div -->
    <hr />
    <span>默认插槽 span</span>

    <template v-slot:subTitle>
      <h2>传递的副标题</h2>
    </template>

    <div>插槽 div</div>
  </quote>
</template>

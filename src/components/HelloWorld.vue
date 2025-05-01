<script setup>
import {ref} from 'vue'
const props = defineProps(["msg",'count'])

const update = ref(props.count);  // 从 props 接收到值，需使用 ref 转换
const increase = ()=>{
  update.value++
}
</script>

<template>
  <div>
    <p>{{ msg }}</p>
    <p>count: {{ update }}</p>
    <button @click="increase">increase</button>
  </div>

</template>

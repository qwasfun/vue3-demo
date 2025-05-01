<script setup>
import { useAttrs } from 'vue'

const props = defineProps(['msg'])

const attrs = useAttrs()

console.log('props:', props)
console.log('attrs:', attrs)
</script>

<script>
export default {
  // 标识不从父组件中继承非 props 属性
  // inheritAttrs: false
}
</script>

<template>
  <div>
    <input v-bind="$attrs" />
    <p>{{ props.msg }}</p>
    <button>自定义事件的触发</button>
  </div>
</template>

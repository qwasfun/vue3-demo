<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'
const mRef = ref(null) // 定义一个ref元素 ，绑定页面 dom
const message = ref('Hello world')

// 未完成挂载，有 message，没有 ref 元素对象
onBeforeMount(() => {
  console.log('onBeforeMount', message, mRef.value)
  debugger
})

// 已完成挂载，message, ref 元素对象都已存在
// mRef.value 值为 <p>Hello world</p>
onMounted(() => {
  console.log('onMounted', message, mRef.value)
})

// 更新之前
onBeforeUpdate(() => {
  console.log('onBeforeUpdate', message, mRef.value)
  debugger
})

// 更新之后的页面
// mRef.value 值为 <p>Hello world2</p>
onUpdated(() => {
  console.log('onUpdated', message, mRef.value)
})

// 组件实例完全销毁前，仍有元素对象，当前示例为 p标签元素
onBeforeUnmount(() => {
  console.log('onBeforeUnmount', message, mRef.value)
  debugger
})

// 组件实例完全销毁，不存在元素对象
onUnmounted(() => {
  console.log('onUnmounted', message, mRef.value)
})
</script>

<template>
  <p ref="mRef">{{ message }}</p>
  <button @click="message = 'Hello world2'">更新</button>
</template>

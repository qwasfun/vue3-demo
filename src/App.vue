<script setup>
import { reactive, toRefs } from 'vue'
const state = reactive({
  msg: 'Hello Atguigu', // 字符串类型
  person: { name: 'Tom', age: 22 }, // 对象类型
  courses: ['JavaScript', 'BOM', 'DOM'], // 数组类型
})
const updateState = () => {
  state.msg += '------'
  state.person = { name: 'Jack', age: '33' }
  state.courses = ['JavaScript2', 'BOM2', 'DOM2']
}

const stateRef = toRefs(state)
</script>

<template>
  <ul>
    <li>msg:{{ stateRef.msg }}</li>
    <li>person:{{ stateRef.person }}</li>
    <li>courses:{{ stateRef.courses }}</li>
  </ul>

  <button @click="updateState">更新 state</button>
</template>

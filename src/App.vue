<script setup>
import { reactive } from 'vue'
const state = reactive({
  msg: 'Hello Atguigu', // 字符串类型
  person: { name: 'Tom', age: 22 }, // 对象类型
  courses: ['JavaScript', 'BOM', 'DOM'] // 数组类型
})
const updateMsg = () => {
  state.msg += '------'
}
const updatePerson = () => {
  state.person = { name: 'Jack', age: '33' }
}
const updateCourses = () => {
  state.courses = ['JavaScript2', 'BOM2', 'DOM2']
}
</script>

<template>
  <ul>
    <li>msg:{{ state.msg }}</li>
    <li>person:{{ state.person }}</li>
    <li>courses:{{ state.courses }}</li>
  </ul>

  <button @click="updateMsg">更新msg</button>
  <button @click="updatePerson">更新 person</button>
  <button @click="updateCourses">更新 courses</button>
</template>

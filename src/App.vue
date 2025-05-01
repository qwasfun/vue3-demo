<script setup>
import { reactive, toRef } from 'vue'

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

const msg = toRef(state, 'msg')
const person = toRef(state, 'person')
const courses = toRef(state, 'courses')
</script>

<template>
  <ul>
    <li>msg:{{ msg }}</li>
    <li>person:{{ person }}</li>
    <li>courses:{{ courses }}</li>
  </ul>

  <button @click="updateState">更新 state</button>
  <p><b>toRef</b> <b>toRefs</b> 用来解决从 reactive 对象中读取的属性也是响应式</p>
  <p>toRefs 一次性将 reactive 对象包含的所有属性值都包装成 ref 对象</p>
  <p>toRef 一次处理一个属性</p>
</template>

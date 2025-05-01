<script setup>
import { inject } from 'vue'
const msg = inject('msg') // 非响应式数据

const count = inject('count') // 响应式数据
const increase = inject('increase') // 函数
const increaseCount = () => {
  count.value++ // 可以实现响应式修改与渲染
}
</script>
<template>
  <h2>Grandson</h2>
  <div>
    <p>>> 因为 msg 不是响应式的，无法添加到实例对象上，所以在孙组件上无法实现渲染</p>
    <p>msg:{{ msg }}</p>
  </div>

  <div>
    <p>>> 响应式数据可以正常的渲染</p>
    <p>count:{{ count }}</p>
  </div>
  <button @click="increaseCount">increaseCount</button>
  <button @click="increase">increase</button>

  <br />
  <p>
    在孙组件中可以动态显示注入的响应式数据 count 也可以更新count 数据，并且
    孙组件和祖先组件会同步更新 也可以调用注入的函数来更新组件的数据
  </p>

  <br />
  <p>
    在祖组件利用 provide 方法进行数据内容的提供，在需要接收的孙组件中利用 inject 函数注入数据即可
  </p>
</template>

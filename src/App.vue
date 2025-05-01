<script setup>
import HelloWorld from './components/HelloWorld.vue'

const changeHandler = () => {
  console.log('changeHandler', event)
}

const customClickHandler = (msg) => {
  console.log('customClickHandler: ', msg)
}
</script>

<!--
props属性 msg
非props属性 value style
原生事件 change
自定义事件 customClick
-->

<template>
  <HelloWorld
    msg="你好，世界"
    value="世界欢迎你"
    style="color: red"
    @change="changeHandler"
    @customClick="customClickHandler"
  />

  <p>1. attrs 可以实现批量非 props 属性，原生事件和自定义事件的传递</p>

  <p>
    2. 从父组件属性设置与传递上来看， 并不能区分出 props 属性和非 props 属性，只能在子组件中进行区分
  </p>

  <p>
    3.子组件中根元素会自动添加父组件传递过来的非 props 属性， 如果不想子组件的根元素受非 props
    属性的影响， 可以在子组件中将 inheritAttrs 属性值设置为 false
  </p>
</template>

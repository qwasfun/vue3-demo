<script setup>
import Comp1 from './components/Comp1.vue'
import Comp2 from './components/Comp2.vue'
import Comp3 from './components/Comp3.vue'
import Comp4 from './components/Comp4.vue'
import Comp5 from './components/Comp5.vue'

import { ref, markRaw } from 'vue'

// 设置需要切换的组件，初始为 Comp1，使用 markRaw 函数，不对组件将那些递归响应式数据代理
const tab = ref(markRaw(Comp1))

// 定义切换组件函数，将组件本身当成参数传递
function changeTab(comp) {
  tab.value = markRaw(comp)
}

// changeTab(Comp1)
</script>

<template>
  <h1>内置组件 Component</h1>

  <p>提供动态组件加载功能。在 Component 占位点上将自定义组件进行指定目标的渲染。</p>

  <hr />
  <h2>点击父组件按钮，切换子组件</h2>

  <p>
    利用 markRaw 函数对 comp
    进行声明，将tab的值设置为非代理对象，目的是不对组件进行递归响应式数据代理，以增强性能。
  </p>
  <button @click="changeTab(Comp1)">ChangeComp1</button>
  <button @click="changeTab(Comp2)">ChangeComp2</button>
  <button @click="changeTab(Comp3)">ChangeComp3</button>
  <button @click="changeTab(Comp4)">ChangeComp4</button>
  <button @click="changeTab(Comp5)">ChangeComp5</button>

  <component :is="tab"></component>
</template>

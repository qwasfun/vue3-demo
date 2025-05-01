<script setup>
import {ref} from 'vue'
const count = ref(18)
const update = ref(12)
</script>

<template>
  <div v-memo="[count]">
    <p>count: {{ count }}</p>
    <p>update: {{ update }}</p>
  </div>

  <button @click="count++">count++</button>
  <button @click="update++">update++</button>

  <div>高效缓存，在指定依赖条件下进行模板编译</div>
  <br />
  <div>
    <p>
      当前有两个响应式数据count 和update，但v-memo指令限制了数据count，那么只有在count++
      按钮更新的时候，v-memo指令包含的内容才会实时更新渲染。
    </p>

    <p>而在 update++ 按钮点击的时候，v-memo指令包含的内容并不会发生响应式变化</p>
    <p>
      任何v-memo 指令设置的式[] (空数组)，v-memo指令相当于 v-once指令的作用，即只进行一次渲染处理
    </p>
  </div>
</template>

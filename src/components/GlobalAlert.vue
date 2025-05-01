<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const isTeleport = ref(false)
</script>

<template>
  <!-- 按钮部分将被嵌套于 #app 网页元素中 -->
  <button @click="isOpen = !isOpen">
    {{ isOpen ? '关闭' : '打开' }} 模态框
  </button>

  <button @click="isTeleport = !isTeleport">
    {{ isTeleport ? '禁用' : '启用' }}移动功能
  </button>

  <!-- 利用 Teleport 内置组件将其包含的元素移动到 body 标签内 -->
  <Teleport to="body" :disabled="isTeleport">
    <Transition mode="in-out">
      <div v-if="isOpen" class="modal">
        <p>元素被移动到body标签内，与 #app 网页元素的div 元素是并列关系</p>

        <button class="close" type="button" @click="isOpen = fasle">
          关闭
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.modal {
  position: fixed;
  isolation: isolate;
  z-index: 1;
  top: 2rem;
  left: 2rem;
  width: 20rem;
  border: 1px solid gray;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: gray;
  box-shadow: 2px 2px 4px gray;
  backdrop-filter: blur(4px);
  color: #f4f4f4;
}

button {
  padding: 0.5rem;
  border: 0;
  border-radius: 1rem;
  box-shadow: inset 0 -1px 4px gray, 1px 1px 4px gray;
  cursor: pointer;
  transition: box-shadow 0.15s ease-in-out;
}
button:hover {
  box-shadow: inset 0 -1px 2px gray, 1px 1px 2px gray;
}
.close {
  display: block;
  margin-left: auto;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease-in-out;
}
.v-enter-from,
.v-leave-active {
  opacity: 0;
  transform: translateX(-10vw);
}
</style>

<script setup>
import { ref } from 'vue'
// 调用 ref 函数 产生 ref 对象 count, 并指定内部保存的数据的初始值为 0
const count = ref(0)

// 读取 ref 对象中的value属性值
console.log(count.value)

// 先读取 value 属性值，加1后再更新到value 属性上
const increaseCount = () => {
  count.value = count.value + 1
}

// 创建 ref 对象，指定内部初始值为一个对象
const person = ref({ name: 'Tom', age: 12 })

// 更新 整个 ref 对象
function setNewPerson() {
  person.value = { name: 'Jack', age: 23 }
}

// 更新 ref 对象里的一项值
function setNewPersonName() {
  person.value.name = 'Jack2'
}
</script>

<template>
  <div>
    <p>count:{{ count }}</p>
    <button @click="increaseCount">增加 count</button>
    <p>{{ person }}</p>
    <button @click="setNewPerson">setNewPerson</button>
    <button @click="setNewPersonName">setNewPersonName</button>

    <div>
      <blockquote>
        <p>setNewPerson 更新整个 ref 对象</p>
        <p>setNewPersonName 更新 ref 对象里的一项值</p>
      </blockquote>
    </div>
  </div>
</template>

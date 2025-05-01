<template>
  <h3>Quote 组件标题</h3>
  <!-- content 内容放置到了 title 的前面 -->
  <slot name="content"></slot>
  <slot name="title"></slot>

  <!-- slot 有一个默认值为 default 的 name 属性 -->
  <slot></slot>

  <!-- 默认值 -->
  <!-- 如果父组件没有进行 v-slot:subTitle 副标题的内容传递，则会显示插槽默认值 "副标题slot默认内容" -->
  <slot name="subTitle">副标题slot默认内容</slot>
</template>

<!--
slot 有个默认值为default的name属性，
它会对没有具体命名 或 指定为 default 的插槽内容进行占位和渲染
-->

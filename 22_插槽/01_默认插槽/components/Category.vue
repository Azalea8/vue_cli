<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot>我算是插槽</slot>
  </div>
</template>

<script>
export default {
  name: 'Category-',
  props: ['dateList','title']
}
</script>

<style>
.category{
  background: skyblue;
  width: 200px;
  height: 300px;
}

h3{
  text-align: center;
  background: orange;
}
</style>
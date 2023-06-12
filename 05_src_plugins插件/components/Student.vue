<template>
<div class="school">
  <h1>{{msg | mySlice}}</h1>
  <h2>学生姓名: {{name}}</h2>
  <h2>学生年龄: {{age}}</h2>
  <input type="text" v-fbind:value="name">
  <button @click="hello">测试</button>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return{
      msg: '我是一个尚硅谷的学生',
      name: '张三',
      age: 18,
    }
  },
}
</script>

<style>

</style>
<template>
<div class="demo">
  <h1 class="title">{{msg}}</h1>
  <h2>学生姓名: {{name}}</h2>
  <h2>学生年龄: {{age}}</h2>
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

<style scoped>
  .demo {
    background: skyblue;
  }
</style>
<template>
<div class="demo">
  <h1>{{msg}}</h1>
  <h2>学生姓名: {{name}}</h2>
  <h2>学生年龄: {{age}}</h2>
  <button @click="sentStudentName">把学生名给school组件</button>
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
  methods: {
    sentStudentName() {
      this.$bus.$emit('hello', this.name)
    }
  }
}
</script>

<style scoped>
  .demo {
    background: skyblue;
    padding: 5px;
    margin: 5px;
  }
</style>
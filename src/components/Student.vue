<template>
<div class="demo">
  <h1>{{msg}}</h1>
  <h2>学生姓名: {{name}}</h2>
  <h2>学生年龄: {{age}}</h2>
  <button @click="getStudentName">点我向app传递Student名称</button>
  <button @click="unbind">解绑test事件</button>
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
    getStudentName() {
      // 触发Student组件实例上的test事件
      this.$emit('test', this.name)
    },
    unbind() {
      // 解绑事件
      this.$off('test')
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
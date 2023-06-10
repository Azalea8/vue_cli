<template>
<div class="school">
  <h1>{{msg}}</h1>
  <h2 @click="showName">学生姓名: {{name}}</h2>
  <h2>学生年龄: {{age}}</h2>

</div>
</template>

<script>
import {mixin} from "@/mixin";
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
  mixins:[mixin]
}
</script>

<style>

</style>
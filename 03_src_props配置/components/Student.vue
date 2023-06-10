<template>
<div class="school">
  <h1>{{msg}}</h1>
  <h2>学生姓名: {{name}}</h2>
  <h2>学生年龄: {{myAge+1}}</h2>
  <h2>学生性别: {{sex}}</h2>
  <button @click="updataAge">尝试修改传进来的属性</button>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return{
      msg: '我是一个尚硅谷的学生',
      myAge: this.age,
    }
  },
  // 简单接收
  // props:['name', 'sex', 'age']

  // 接受的同时对数据类型限制
  /*props: {
    name: String,
    age: Number,
    sex: String,
  }*/

  // 接受的同时对数据类型限制 + 默认值的设置 + 必要性的设置
  // prop 应该是只读的，若需修改拷贝到data中再修改
  props: {
    name: {
      type: String,
      required: true, // name是必须传的
    },
    age: {
      type: Number,
      default: 99,
    },
    sex: {
      type: String,
    }
  },
  methods: {
    updataAge() {
      this.myAge++
    }
  },
}
</script>

<style>

</style>
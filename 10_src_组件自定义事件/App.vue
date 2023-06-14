<template>
  <div class="app">
    <h1>{{msg}}<span v-show="studentName">{{studentName}}</span></h1>
    <!--- 自定义事件 -->
    <Student @test="demo"></Student>
    <Student ref="Student" @click.native="show"></Student>  <!-- 组件绑定原生DOM事件需要加修饰符 -->
    <br/>
    <!--  通过父组件向子组件props传递函数实现：子组件向父组件传递数据  -->
    <School :getSchoolName="getSchoolName"></School>
  </div>
</template>

<script>
import Student from "@/components/Student.vue";
import School from "./components/School.vue";

export default {
  name: 'App',
  components: {
    School,
    Student,
  },
  data() {
    return{
      msg: '你好啊！',
      studentName: '',
    }
  },
  methods: {
    getSchoolName(name) {
      console.log(name)
    },
    demo(name) {
      this.studentName = name
    },
    show() {
      alert('123')
    }
  },
  mounted() {
    this.$refs.Student.$on('test', this.demo) // 通过ref属性获取组件实例对象，在其上面添加事件
  }
}
</script>

<style>
  .app{
    background: gray;
    padding: 5px;
  }
</style>
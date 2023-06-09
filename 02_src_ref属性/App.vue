<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="button">点我输出上方的DOM元素</button>
    <School ref="school"></School>
  </div>
</template>

<script>
import School from "@/components/Student.vue";

export default {
  name: 'App',
  components: {
    School,
  },
  data() {
    return{
      msg: '欢迎学习Vue!'
    }
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title) //真实DOM元素
      console.log(this.$refs.button) //真实DOM元素
      console.log(this.$refs.school) //组件实例对象
    }
  }
}
</script>

<style>

</style>
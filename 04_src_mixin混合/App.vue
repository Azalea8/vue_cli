<template>
  <div>
    <Student></Student>
    <br/>
    <School></School>
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
<template>
  <div class="app">
    <h1>{{msg}}<span v-show="studentName">{{studentName}}</span></h1>
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
      msg: '你好啊！',
      studentName: '',
    }
  },
}
</script>

<style>
  .app{
    background: gray;
    padding: 5px;
  }
</style>
<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <school></school>
    <student></student>
  </div>
</template>

<script>
  import Student from "./components/Student.vue";
  import School from "./components/School.vue";

  export default {
    name: 'App',
    components: {
      School,
      Student,
    }
  }
</script>

<style>

</style>
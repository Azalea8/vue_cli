<style>

</style>

<template>
  <div>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="showName()">点我提示信息</button>
  </div>
</template>


<script>
  export default {
    // el: '#root' 【不能写el】

    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Student',
    data() {
      return {
        name: 'Jack',
        age: 18,
      }
    },
    methods: {
      showName() {
        alert(this.name)
      }
    }
  }

</script>
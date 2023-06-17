<template>
<div class="demo">
  <h1>{{msg}}</h1>
  <h2>学校名称: {{name}}</h2>
  <h2>学校地址: {{address}}</h2>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return{
      msg: '我是一个南山中学的学生',
      name: '南山中学',
      address: '四川省绵阳市',
    }
  },
  mounted() {
    this.$bus.$on('hello',(data) =>{
      console.log(data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  }
}
</script>

<style scoped>
  .demo {
    background: orange;
    padding: 5px;
    margin: 5px;
  }
</style>
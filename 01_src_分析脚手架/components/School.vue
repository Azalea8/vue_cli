<style>
  .demo {
    background: orange;
  }
</style>

<template>
  <div class="demo">
    <h2>学校名称: {{ schoolName }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="showName()">点我提示信息</button>
  </div>
</template>


<script>
  export default {
    // el: '#root' 【不能写el】
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    data() {
      return {
        schoolName: '尚硅谷',
        address: '北京',
      }
    },
    methods: {
      showName() {
        alert(this.schoolName)
      }
    }
  }

</script>
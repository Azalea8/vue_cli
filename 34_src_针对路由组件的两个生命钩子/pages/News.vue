<template>
  <ul>
    <li :style="{opacity: opacity}">欢迎学习Vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "News-",
  data() {
    return{
      opacity: 1,
    }
  },
  /*mounted() {
    this.timer = setInterval(() => {
      if (this.opacity > 0) {
        this.opacity -= 0.01
      } else {
        this.opacity = 1
      }
    }, 16)
  },*/
  beforeDestroy() {
    console.log('News-组件即将销毁')
  },
  activated() {
    console.log('News-组件激活')
    this.timer = setInterval(() => {
      if (this.opacity > 0) {
        this.opacity -= 0.01
      } else {
        this.opacity = 1
      }
    }, 16)
  },
  deactivated() {
    console.log('News-组件失活')
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>

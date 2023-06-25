<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="test">测试router上的go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner-",
  methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    test() {
      this.$router.go(3) // n: 前进后退的数量
    }
  }
}
</script>

<style scoped>

</style>

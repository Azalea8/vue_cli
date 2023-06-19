<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="test" :appear="true">
      <h1 v-show="!isShow" key="1">你好啊!</h1>
      <h1 v-show="isShow" key="2">Azalea!</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Test2-',
  data() {
    return{
      isShow: true,
    }
  }
}
</script>

<style scoped>
  h1{
    background: orange;
  }

  .test-enter, .test-leave-to{
    transform: translateX(-100%) ;
  }
  .test-enter-active, .test-leave-active{
    transition: 1s;
  }
  .test-enter-to, .test-leave{
    transform: translateX(0);
  }

</style>
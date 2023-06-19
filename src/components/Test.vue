<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition :appear="true">
      <h1 v-show="isShow">你好啊!</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test-',
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

  .v-enter-active{
    animation: test 1s;
  }

  .v-leave-active{
    animation: test 1s reverse;
  }

  @keyframes test {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0);
    }
  }
</style>
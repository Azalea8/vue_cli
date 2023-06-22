<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等在加</button>
  </div>
</template>

<script>
export default {
  name: 'Count-',
  data() {
    return {
      num: 1,
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment', this.num)
    },
    decrement() {

    },
    incrementOdd() {

    },
    incrementWait() {
      setTimeout(()=>{

      },500)
    },
  }
}
</script>

<style>

</style>
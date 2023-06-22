<template>
  <div>
    <h1>当前求和为：{{test}}</h1>
    <h1>放大10倍和为：{{bigSum}}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: 'Count-',
  data() {
    return {
      num: 1,
    }
  },
  computed: {
    /*test() {
      return this.$store.state.sum
    },*/

    // 【...】 => 展开字典
    ...mapState({test: 'sum'}), // 自动生成computed函数

    /*bigSum() {
      return this.$store.getters.bigSum
    },*/
    ...mapGetters({bigSum: 'bigSum'})
  },
  methods: {
    increment() {
      this.$store.commit('INCREMENT', this.num)
    },
    decrement() {
      this.$store.commit('DECREMENT', this.num)
    },
    incrementOdd() {
      this.$store.dispatch('incrementOdd', this.num)
    },
    incrementWait() {
      this.$store.dispatch('incrementWait', this.num)
    },
  }
}
</script>

<style>

</style>
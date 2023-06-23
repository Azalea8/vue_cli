<template>
  <div>
    <h1>当前求和为：{{test}}</h1>
    <h1>放大10倍和为：{{bigSum}}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
    <ul>
      <li v-for="(person, index) in personList" :key="index">
        {{person.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

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
    ...mapState({test: 'sum', personList: 'personList'}), // 自动生成computed函数

    /*bigSum() {
      return this.$store.getters.bigSum
    },*/
    ...mapGetters({bigSum: 'bigSum'})
  },
  methods: {
    /*increment() {
      this.$store.commit('INCREMENT', this.num)
    },
    decrement() {
      this.$store.commit('DECREMENT', this.num)
    },*/

    ...mapMutations({increment: 'INCREMENT', decrement: 'DECREMENT'}),
    // 生成如下代码...
    /*increment(value) {
      this.$store.commit('INCREMENT', value)
    }*/

    /*incrementOdd() {
      this.$store.dispatch('incrementOdd', this.num)
    },
    incrementWait() {
      this.$store.dispatch('incrementWait', this.num)
    },*/
    ...mapActions({incrementOdd: 'incrementOdd', incrementWait: 'incrementWait'})
  }
}
</script>

<style>

</style>
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
    ...mapState('countAbout' ,{test: 'sum'}),
    ...mapState('personAbout', {personList: 'personList'}),

    ...mapGetters('countAbout' ,{bigSum: 'bigSum'})
  },
  methods: {
    ...mapActions('countAbout' ,{incrementOdd: 'incrementOdd', incrementWait: 'incrementWait'}),

    ...mapMutations('countAbout' ,{increment: 'INCREMENT', decrement: 'DECREMENT'}),
  }
}
</script>

<style>

</style>
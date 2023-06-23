<template>
  <div>
    <h1>人员</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addName(name)">添加</button>
    <ul>
      <li v-for="(person, index) in personList" :key="index">
        {{person.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Person-',
  data() {
    return{
      name: '',
    }
  },
  computed: {
    ...mapState({personList: 'personList'}),
  },
  methods: {
    addName(name) {
      const personObj = {name: name}
      this.$store.commit('ADD_NAME', personObj)
      this.name = ''
    }
  }
}
</script>

<style>

</style>
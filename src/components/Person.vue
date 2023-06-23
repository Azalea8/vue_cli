<template>
  <div>
    <h1>人员</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addName(name)">添加</button>
    <button @click="addNameTest(name)">添加2</button>
    <button @click="test">最后一个人的名字</button>
    <ul>
      <li v-for="(person, index) in personList" :key="index">
        {{person.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Person-',
  data() {
    return{
      name: '',
    }
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList
    },
    lastPersonName() {
      return this.$store.getters["personAbout/lastPersonName"]
    }
  },
  methods: {
    addName(name) {
      const personObj = {name: name}
      this.$store.commit('personAbout/ADD_NAME', personObj)
      this.name = ''
    },
    addNameTest(name) {
      const personObj = {name: name}
      this.$store.dispatch('personAbout/addNameWang', personObj)
      this.name = ''
    },
    test() {
      alert(this.lastPersonName)
    }
  }
}
</script>

<style>

</style>
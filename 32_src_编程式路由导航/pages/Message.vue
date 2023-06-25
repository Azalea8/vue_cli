<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
<!--        <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>-->
        <router-link :to="{
          /*path: '/home/message/detail',*/
          name: 'detail',
          query: {
            id: m.id,
            title: m.title
          } // 如果用params传参，只能能用命名路由name
        }">
          {{ m.title }}
        </router-link>
        <button @click="showPush(m)">push查看</button>
        <button @click="showReplace(m)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message-",
  data() {
    return {
      messageList: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'},
      ]
    }
  },
  methods: {
    showPush(m) {
      this.$router.push({
        name: 'detail',
        query: {
          id: m.id,
          title: m.title
        }
      })
    },
    showReplace(m) {
      this.$router.replace({
        name: 'detail',
        query: {
          id: m.id,
          title: m.title
        }
      })
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>

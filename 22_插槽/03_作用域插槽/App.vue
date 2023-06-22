<template>
  <div class="container">
    <Category title="游戏">
      <template v-slot:center="dateObj">
        <!-- Vue2.6版本更新，全部用v-slot完成 -->
        <ul>
          <li v-for="(g , index) in dateObj.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template v-slot:center="dateObj">
        <!-- 这里dataObj为对象，包含插槽传递的数据 -->
        <ol>
          <li  v-for="(g , index) in dateObj.games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template v-slot:center="dateObj">
        <h4 v-for="(g , index) in dateObj.games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Count.vue";
export default {
  name: "App",
  components:{
    Category
  },
}
</script>
<style scoped>
.container, .foot{
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>



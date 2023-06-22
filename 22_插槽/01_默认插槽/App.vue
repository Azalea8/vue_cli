<template>
  <div class="container">
    <Category title="美食" :dateList="foods">
      <ul>
        <li v-for="(date,index) in foods" :key="index">
          {{date}}
        </li>
      </ul>
    </Category>
    <Category title="游戏" :dateList="games">
      <ul>
        <li v-for="(date,index) in games" :key="index">
          {{date}}
        </li>
      </ul>
    </Category>
    <Category title="电影" :dateList="films">
      <ul>
        <li v-for="(date,index) in films" :key="index">
          {{date}}
        </li>
      </ul>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Count.vue";

export default {
  name: 'App',
  components: {Category},
  template: {
    Category,
  },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
<template>
<div class="school">
  <h1>{{msg}}</h1>
  <h2 @click="showName">学校名称: {{name}}</h2>
  <h2>学校地址: {{address}}</h2>

</div>
</template>

<script>
// 引入一个混合
import {mixin, test} from "@/mixin";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return{
      msg: '我是一个南山中学的学生',
      name: '南山中学',
      address: '四川省绵阳市',
    }
  },
  mixins: [mixin, test]
}
</script>

<style>

</style>
<template>
  <transition name="todo" appear>
    <li>
      <label>
        <!-- 这里勾选和取消勾选可以使用change和click作为事件处理 -->
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <!-- <input type="checkbox" v-model="todo.done"/> -->
        <!--   props单向流通   -->
        <!-- v-model数据的双向绑定，checkbox使用v-model来双向绑定其是否被勾选,也可以实现效果但不推荐(因为其实修改了props中的数据) -->
        <!-- 这里修改了从List修改过来的props,这里的不允许改是浅层次，深层次的更改vue是检测不到的，此特性可以做些文章，但不建议 -->
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
  </transition>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: 'Item-',
  methods: {
    handleCheck(id) {
      this.$bus.$emit('checkTodoObj', id)
    },
    handleDelete(id) {
      if(confirm('确认删除吗？')) {
        pubsub.publish('deleteTodoObj', id)
      }
    }
  },
  props: ['todo',]
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ddd;
}

li:hover button {
  display: block;
}

.todo-enter, .todo-leave-to{
  transform: translateX(-100%) ;
}
.todo-enter-active, .todo-leave-active{
  transition: 1s;
}
.todo-enter-to, .todo-leave{
  transform: translateX(0);
}
</style>
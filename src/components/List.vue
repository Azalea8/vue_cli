<template>
  <ul class="todo-main">
    <Item v-for="todo in todos" :key="todo.id"
          :todo="todo"
          :checkTodoObj="checkTodoObj"
          :deleteTodoObj="deleteTodoObj"
    />
  </ul>
</template>

<script>
import Item from "@/components/Item.vue";
export default {
  name: 'List-',
  components: {
    Item,
  },
  props:['todos', 'checkTodoObj', 'deleteTodoObj',]
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodoObj="addTodoObj"/>
        <List :todos="todos" :checkTodoObj="checkTodoObj" :deleteTodoObj="deleteTodoObj"/>
        <Footer :todos="todos" :checkAllTodoObj="checkAllTodoObj" :clearAllTodoObj="clearAllTodoObj"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import List from "@/components/List.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer,
  },
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    addTodoObj(todoObj) {
      this.todos.unshift(todoObj)
    },
    checkTodoObj(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    deleteTodoObj(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    },
    checkAllTodoObj(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },
    clearAllTodoObj() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(newValue) {
        localStorage.setItem('todos', JSON.stringify(newValue))
      }
    }
  },
  created() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
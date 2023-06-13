<template>
  <!--隐式类型转换-->
  <div class="todo-footer" v-show="total">
    <label>
      <!--这里也可用v-model来替代，此时不需要计算属性了-->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
       <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Footer-',
  props: ['todos', 'checkAllTodoObj', 'clearAllTodoObj'],
  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      return this.todos.reduce((todoTotal, current) => {
        return todoTotal + current.done;
      }, 0)
    },
    isAll: {
      get() {
        return this.total === this.doneTotal && this.total > 0;
      },
      set(v) {
        this.checkAllTodoObj(v)
      }
    },
  },
  methods: {
    /*checkAll(e) {
      this.checkAllTodoObj(e.target.checked)
    },*/
    clearAll() {
      if(confirm('确认删除吗？')){
        this.clearAllTodoObj()
      }
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
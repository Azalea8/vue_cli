<template>
  <li>
    <label>
      <!-- 这里勾选和取消勾选可以使用change和click作为事件处理 -->
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <!--   props单向流通   -->
      <!-- v-model数据的双向绑定，checkbox使用v-model来双向绑定其是否被勾选,也可以实现效果但不推荐(因为其实修改了props中的数据) -->
      <!-- 这里修改了从List修改过来的props,这里的不允许改是浅层次，深层次的更改vue是检测不到的，此特性可以做些文章，但不建议 -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur($event,todo)"
             ref="inputTitle"/>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)" >编辑</button>
  </li>
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
    },
    handleEdit(todo) {
      //  没有匹配get, set; Vue检测不到数据变化无法响应式
      // todo.isEdit = true
      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit = true
      }else{
        this.$set(todo, 'isEdit', true)
      }
      /*setTimeout(()=>{
        this.$refs.inputTitle.focus()
      },200)*/
      this.$nextTick(function (){
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(e, todo) {
      todo.isEdit = false
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
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
</style>
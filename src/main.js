/*
    该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App,所有组件的父组件
import App from './App.vue'
// 关闭Vue生产提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
})

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        // 全局事件总线
        // 最初传数据用props传函数，接着用自定义事件，但都存在明确的上下级关系，同级之间无法沟通
        // 原因就是同级或者祖孙的组件之间看不见，引入一个公交车组件$bus (Vue应用的vm) ,所有组件都能在上面绑定事件，事件的回调留在自身
        Vue.prototype.$bus = this
    }
})
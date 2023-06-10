const ojb = {
    install(Vue) {
        //全局配置

        Vue.mixin({
            data() {
                return{
                    x: 100,
                    y: 200,
                }
            }
        });

        Vue.filter('mySlice', function (val){
            return val.slice(0,4);
        });

        Vue.directive('fbind', {
            bind(el, binding){
                // console.log('bind')
                el.value = binding.value;
            },
            //指令被插入页面时
            inserted(el){
                // console.log('inserted')
                el.focus();
            },
            //指令所在模版被重新解析时
            update(el, binding){
                // console.log('update');
                el.value = binding.value;
            }
        });

        //给Vue原型上添加一个方法（vm和vc都可以用）
        Vue.prototype.hello = function () {alert('你好啊》》》》')}
    }
}
export default ojb
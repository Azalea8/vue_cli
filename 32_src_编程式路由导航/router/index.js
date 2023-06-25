//该文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router';
import About from "@/pages/About.vue";
import Home from '@/pages/Home.vue';
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import Detail from "@/pages/Detail.vue";

//创建并默认暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component: About
        },
        {
            path:'/home',
            component: Home,
            children:[
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                            // props的第一种写法值为对象,该对象的所有key-value都会以props的形式传给detail组件(死数据)
                            //props: {a: 1, b: 'hello'},

                            //props的第二种写法，值为布尔值,布尔值为真，就会把该路由组件收到的所有params(注意如果是query参数不会奏效的)参数以props的形式传递给detail组件
                            // props: true

                            //props的第三种写法,值为回调函数
                            props($route) {
                                return{
                                    id: $route.query.id,
                                    title: $route.query.title,
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ]
});

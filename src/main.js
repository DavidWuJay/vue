// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex);

/**
 *  Vuex 使用说明
 * 
 *    Vuex： 状态管理系统
 *    使用场景： 用于跨级组件和兄弟组件通信时的
 *  思考使用： 使用Vuex会有一定的门槛和复杂性，它主要使用场景是大型单页应用，更适合多人协同开发，如果你的项目于不是很复杂，或者希望短期内见效，你需要认真考虑是否真的有必要使用vuex
 */
// 实例 
//创建一个Vuex 实例
const store = new Vuex.Store({
  // state 只用于存放数据，不能手动修改
  state:{
      count:0
      //组件内想要访问 这个数据请看demo HelloWorld.vue
  },
  //唯一修改大法 
  mutations:{
    // 定义方法进行操作state 数据
    // 在mutations 中定义的方法中 参数一 为操作的数据 ， 参数二 为 指定的数量 类型可以为数字、字符串或者对象类型
    //组件内使用这两方法方式请看 demo HelloWorld.vue
    //使用注意事项: mutations里尽量不要异步操作数据，如果异步操作数据了，组件在commit后，数据不能立即改变，而且不知道什么时候会改变。
    increment (state){
      state.count ++;
    },
    decrease (state){
      state.count --;
    },
    addclick(state , n){
      state.count += n;
    },
    //另外一种使用方式为直接使用包含type属性的对象例如
    addobject(state ,  params){
      state.count += params.count;
    }
  }
  //除了 state mutations 还有 getters actions modules （这三个为高级用法）
  
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //使用
  store,
  template: '<App/>',
  components: { App }
})

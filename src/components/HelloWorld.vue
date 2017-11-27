<template>
  <div class="hello">
      <h1>访问Vuex中的数据</h1>
     <p> 这是 template中访问的:  {{ $store.state.count }}  </p> 
      <p>这是方法内访问的:{{count}}</p>

      <button @click="handleIncrement">+1</button>
      <button @click="handleDecrease">-1</button>
      <button @click="handleAddclick">定义参数二</button>
      <button @click="handleAddObject">含type熟悉的对象写法</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    //方法内使用
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    // 说明 在组件内，通过this.$store.commit方法来执行mutations中的方法
    // 例子 this.$store.commit('这里填写mutations中定义好的方法名称')
    handleIncrement(){
      this.$store.commit('increment')
    },
    handleDecrease(){
      this.$store.commit('decrease')
    },
    handleAddclick(){
      this.$store.commit('addclick',5)
    },
    handleAddObject(){
      this.$store.commit({
        type:'addobject',
        count:10
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

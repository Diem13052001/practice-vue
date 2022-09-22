<template>
  <div id="app">
    
    <CompHeader />
    <router-link :to="{ name: 'Home' }"></router-link>
    <router-view></router-view>
    <CompFooter />
  </div>
</template>

<script>
import CompHeader from './component/CompHeader'
import CompFooter from './component/CompFooter'
import Home from './component/Home'
import Login from './component/Login'

export default {
  name: 'app',
  components: {
    Home,
    Login,
    CompHeader,
    CompFooter
},
  // data () {
  //   return {
      
  //   }
  // },
  // created: {

  // }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #333;
  font-size: 14px;
  background-color: #f3f4f5;
  width: 100%;
}
* {
  padding: 0;
  margin: 0;
}
* {
  background-repeat: no-repeat;
  box-sizing: inherit;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}
a {
  text-decoration: none;
  color: #0b77bd;
}
input {
  border-style: none;
}

</style>

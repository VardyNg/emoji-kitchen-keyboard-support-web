<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HeaderItem />
  <SupportPage />
</template>

<script>
import HeaderItem from './components/Header.vue'  
import SupportPage from './components/Support.vue'  
export default {
  name: 'App',
  components: {
    HeaderItem,
    SupportPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

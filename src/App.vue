<template>
  <HeaderItem />
  <SupportPage />
  <CopyRight />
</template>

<script>
import HeaderItem from './components/Header.vue'  
import SupportPage from './components/Support.vue'  
import CopyRight from './components/CopyRight.vue';
export default {
  name: 'App',
  components: {
    HeaderItem,
    SupportPage,
    CopyRight,
  }
}
</script>

<style>
@import '@/style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

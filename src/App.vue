<template>
  <div
    style="background-color: blanchedalmond;"
  >
    <div
      style="
        margin: 0 auto;
        max-width: 600px;
        background-color: white;
      "
    >
      <HeaderItem class="main-components"/>
      <SupportPage class="main-components"/>
      <CopyRight class="main-components"/>
    </div>
  </div>
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
.main-components {
  padding: 40px;
}
</style>

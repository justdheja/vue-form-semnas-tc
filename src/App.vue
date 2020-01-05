<template>
  <div id="app">
    <Hero></Hero>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Hero from '../src/components/Hero'
import Footer from '../src/components/Footer'
export default {
  name: 'App',
  components: {
    Hero,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>

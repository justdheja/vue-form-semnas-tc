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
@import url('https://fonts.googleapis.com/css?family=Alata|Montserrat&display=swap');
#app{
  background-color: #E6E0D7;
}
.alata{
  font-family: 'Alata', sans-serif;
}
.montserrat{
  font-family: 'Montserrat', sans-serif;
}
</style>

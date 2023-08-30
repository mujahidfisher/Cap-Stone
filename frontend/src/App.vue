<template>
  <div>
    <navBarComp />
    <router-view />
    <footerCompVue />
  </div>
</template>

<script>
import navBarComp from './components/navBarComp.vue';
import footerCompVue from './components/footerComp.vue';
  export default {
    components: {
      navBarComp,
      footerCompVue
    }
  }
</script>

<style scoped>

</style>

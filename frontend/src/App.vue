<template>
  <div>
    <navBarComp />
    <router-view />
  </div>
</template>

<script>
import navBarComp from './components/navBarComp.vue';
  export default {
    components: {
      navBarComp,
    }
  }
</script>

<style scoped>

</style>

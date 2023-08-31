<template>
  <div>
    <router-view />
    <footerCompVue />
  </div>
</template>

<script>
import footerCompVue from './components/footerComp.vue';
  export default {
    components: {
      footerCompVue
    }
  }
</script>

<style scoped>

</style>

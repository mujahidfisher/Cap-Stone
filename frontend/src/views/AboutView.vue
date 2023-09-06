<template>
  <div>
    <navBarComp />
    <section1AboutComp />
    <section2AboutComp />
    <footerComp />
  </div>
</template>

<script>
import navBarComp from '../components/navBarComp.vue';
import section1AboutComp from '@/components/section1AboutComp.vue';
import section2AboutComp from '@/components/section2AboutComp.vue'
import footerComp from '@/components/footerComp.vue';
  export default {
    components: {
      section1AboutComp,
      section2AboutComp,
      navBarComp,
      footerComp
    }
  }
</script>

<style scoped>

</style>

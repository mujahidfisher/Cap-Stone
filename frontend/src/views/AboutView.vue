<template>
  <div>
    <navBarComp />
    <section1AboutComp />
    <section2AboutComp />
  </div>
</template>

<script>
import navBarComp from '../components/navBarComp.vue';
import section1AboutComp from '@/components/section1AboutComp.vue';
import section2AboutComp from '@/components/section2AboutComp.vue'
  export default {
    components: {
      section1AboutComp,
      section2AboutComp,
      navBarComp,
    }
  }
</script>

<style scoped>

</style>

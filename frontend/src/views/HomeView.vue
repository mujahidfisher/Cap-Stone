<template>
  <div>
    <section1HomeComp />
    <section2HomeComp />
    <section3HomeComp />
    <trendingAnimeComp />
    <galleryCarouselComp />
  </div>
</template>

<script>
import section1HomeComp from '@/components/section1HomeComp.vue';
import section2HomeComp from '../components/section2HomeComp.vue';
import section3HomeComp from '../components/section3HomeComp.vue';
import trendingAnimeComp from '../components/trendingAnimeComp.vue';
import galleryCarouselComp from '../components/galleryCarouselComp.vue'
  export default {
    components: {
      section1HomeComp,
      section2HomeComp,
      section3HomeComp,
      trendingAnimeComp,
      galleryCarouselComp
    }
    
  }
</script>

<style scoped>

</style>

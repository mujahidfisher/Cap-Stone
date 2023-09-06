<template>
    <div>
        <navBarComp />
        <h1>Merchandise Page</h1>
        <filterComp />
        <cardComp />
        <footerComp />
    </div>
</template>

<script>
import navBarComp from '../components/navBarComp.vue';
import cardComp from '../components/cardComp.vue'
import filterComp from '../components/filterComp.vue'
import footerComp from '@/components/footerComp.vue';
    export default {
        components: {
            filterComp,
            cardComp,
            navBarComp,
            footerComp
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <navBarComp />
        <h1>Merchandise Page</h1>
        <filterComp />
        <cardComp />
    </div>
</template>

<script>
import navBarComp from '../components/navBarComp.vue';
import cardComp from '../components/cardComp.vue'
import filterComp from '../components/filterComp.vue'
    export default {
        components: {
            filterComp,
            cardComp,
            navBarComp,
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <h1>Merchandise Page</h1>
        <filterComp />
        <cardComp />
    </div>
</template>

<script>
import cardComp from '../components/cardComp.vue'
import filterComp from '../components/filterComp.vue'
    export default {
        components: {
            filterComp,
            cardComp,
        }
    }
</script>

<style scoped>

</style>
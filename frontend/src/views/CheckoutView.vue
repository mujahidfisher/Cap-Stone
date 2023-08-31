<template>
    <div>
        <navBarComp />
        <h1>Checkout</h1>
        <checkoutTableComp />
    </div>
</template>

<script>
import navBarComp from '../components/navBarComp.vue';
import checkoutTableComp from '@/components/checkoutTableComp.vue';
    export default {
        components: {
            checkoutTableComp,
            navBarComp,
        }
        
    }
</script>

<style scoped>

</style>
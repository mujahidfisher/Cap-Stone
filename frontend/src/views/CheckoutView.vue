<template>
    <div class="pagehieght">
        <navBarComp />
        <h1 class="checkout-head">Checkout</h1>
        <checkoutTableComp />
        <footerComp />
    </div>
</template>

<script>
import navBarComp from '../components/navBarComp.vue';
import checkoutTableComp from '@/components/checkoutTableComp.vue';
import footerComp from '@/components/footerComp.vue';
    export default {
        components: {
            checkoutTableComp,
            navBarComp,
            footerComp
        }
        
    }
</script>

<style scoped>

</style>
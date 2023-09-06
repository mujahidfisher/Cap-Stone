<template>
    <div>
        <navBarComp />
        <singleItem />
        <footerComp />
    </div>
</template>

<script>
import navBarComp from '@/components/navBarComp.vue';
import singleItem from '@/components/singleItem.vue';
import footerComp from '@/components/footerComp.vue';
    export default {
        components: {
            singleItem,
            navBarComp,
            footerComp
        }
        
    }
</script>

<style scoped>

</style>
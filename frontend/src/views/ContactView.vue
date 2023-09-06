<template>
    <div>
        <navBarComp />
        <h1 class="title-1">Contact Me</h1>
        <contactFormComp />
        <footerComp />
    </div>
</template>

<script>
import navBarComp from '../components/navBarComp.vue';
import contactFormComp from '@/components/contactFormComp.vue';
import footerComp from '@/components/footerComp.vue';
    export default {
        components: {
            contactFormComp,
            navBarComp,
            footerComp
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <navBarComp />
        <h1>Contact Me</h1>
        <contactFormComp />
    </div>
</template>

<script>
import navBarComp from '../components/navBarComp.vue';
import contactFormComp from '@/components/contactFormComp.vue';
    export default {
        components: {
            contactFormComp,
            navBarComp,
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <navBarComp />
        <h1>Admin</h1>
        <merchAdminComp />
        <userAdminComp />
    </div>
</template>

<script>
import navBarComp from '../components/navBarComp.vue';
import merchAdminComp from '@/components/merchAdminComp.vue';
import userAdminComp from '@/components/userAdminComp.vue';
    export default {
        components: {
            merchAdminComp,
            userAdminComp,
            navBarComp,
        }
        
    }
</script>

<style scoped>

</style>
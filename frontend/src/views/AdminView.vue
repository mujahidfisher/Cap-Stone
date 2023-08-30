<template>
    <div>
        <h1>Admin</h1>
        <merchAdminComp />
        <userAdminComp />
    </div>
</template>

<script>
import merchAdminComp from '@/components/merchAdminComp.vue';
import userAdminComp from '@/components/userAdminComp.vue';
    export default {
        components: {
            merchAdminComp,
            userAdminComp,
        }
        
    }
</script>

<style scoped>

</style>
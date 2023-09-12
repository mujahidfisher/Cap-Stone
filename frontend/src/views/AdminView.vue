<template>
    <div>
        <navBarComp />
        <h1 class="admin-title">Admin</h1>
        <merchAdminComp />
        <userAdminComp />
        <ordersComp />
        <footerComp />
    </div>
</template>

<script>
import navBarComp from '../components/navBarComp.vue';
import merchAdminComp from '@/components/merchAdminComp.vue';
import userAdminComp from '@/components/userAdminComp.vue';
import ordersComp from '@/components/OrdersComp.vue'
import footerComp from '@/components/footerComp.vue';
    export default {
        components: {
            merchAdminComp,
            userAdminComp,
            ordersComp,
            navBarComp,
            footerComp
        }
        
    }
</script>

<style scoped>

</style>
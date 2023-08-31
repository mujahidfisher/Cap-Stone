<template>
    <div>
        <h1>Cart</h1>
        <div v-for="merch in cart" :key="merch.merchID">
            <h2>{{ merch.merchName }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["cart"],
        components: {
            
        },
        methods: {
            
        },
    }
</script>

<style scoped>

</style>
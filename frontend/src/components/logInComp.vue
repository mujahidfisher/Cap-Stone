<template>
    <div class="container-fluid">
        <input type="email" placeholder="Email Address">
        <input type="password" placeholder="Password">
        <div class="btn-submit">
            <router-link to="/"><button>SignIn</button></router-link>
        </div>
        <p>Have'nt made an account: <router-link to="/signUp">SignUp</router-link></p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
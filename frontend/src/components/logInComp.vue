<template>
    <div class="signup-page">
        <div class="main-box-log">
            <input class="form-control-log" type="email" placeholder="Email Address" required>
            <input class="form-control-log" type="password" placeholder="Password" required>
                <router-link to="/"><button class="btn-submit-log"><span>SignIn</span></button></router-link>
        </div>
        <p class="text-me">Have'nt made an account? <router-link to="/signUp"> SignUp</router-link></p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
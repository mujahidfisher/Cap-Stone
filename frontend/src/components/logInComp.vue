<template>
    <div class="signup-page">
        <div class="main-box-log">
            <form @submit.prevent="login">
            <input class="form-control-log" type="email" placeholder="Email Address" v-model="payload.emailAdd" required>
            <input class="form-control-log" type="password" placeholder="Password" v-model="payload.userPass" required>
               <button type="submit" class="btn-submit-log"><span>SignIn</span></button>
            </form>
        </div>
        <p class="text-me">Have'nt made an account? <router-link to="/signUp"> SignUp</router-link></p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                payload:{
                    emailAdd: "",
                    userPass: ""
                }
            }
        },
        methods:{
            login(){
                this.$store.dispatch("LoginUser", this.payload)
            }
        },
        beforeCreate(){
            this.$store.dispatch('fetchUsers')
        }
    }
</script>

<style scoped>

</style>
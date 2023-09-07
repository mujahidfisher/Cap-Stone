<template>
  <div class="signup-page">
    <div class="main-box">
      <form @submit.prevent="registration">
      <input class="form-control-sign" type="text" placeholder="Name" v-model="payload.firstName" required/>
      <input class="form-control-sign" type="text" placeholder="Surname" v-model="payload.lastName" required/>
      <input class="form-control-sign" type="number" placeholder="Age" v-model="payload.userAge" required/>
      <input class="form-control-sign" type="email" placeholder="Email Address" v-model="payload.emailAdd" required/>
      <input class="form-control-sign" type="password" placeholder="Password" v-model="payload.userPass" required/>
        <button type="submit" class="btn-submit" >Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      payload: {
        firstName: "",
        lastName: "",
        userAge: "",
        emailAdd: "",
        userPass: ""
      }
    }
  },
  methods:{
    registration(){
      this.$store.dispatch('Register', this.payload)
    }
  }
};
</script>

<style scoped></style>

<template>
  <div class="signup-page">
    <div class="main-box">
      <input class="form-control-sign" type="text" placeholder="Name" required/>
      <input class="form-control-sign" type="text" placeholder="Surname" required/>
      <input class="form-control-sign" type="number" placeholder="Age" required/>
      <input class="form-control-sign" type="email" placeholder="Email Address" required/>
      <input class="form-control-sign" type="password" placeholder="Password" required/>
        <router-link to="/"><button class="btn-submit">Submit</button></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>

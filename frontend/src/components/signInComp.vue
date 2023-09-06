<template>
  <div class="signup-page">
    <div class="main-box">
      <input class="form-control-sign" type="text" placeholder="Name" />
      <input class="form-control-sign" type="text" placeholder="Surname" />
      <input class="form-control-sign" type="number" placeholder="Age" />
      <input class="form-control-sign" type="email" placeholder="Email Address" />
      <input class="form-control-sign" type="password" placeholder="Password" />
        <router-link to="/"><button class="btn-submit">Submit</button></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>

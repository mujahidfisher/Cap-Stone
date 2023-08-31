<template>
  <div>
    <h1>single page</h1>
    <h2>{{ $route.query.name }}</h2>
    <div class="card text-center">
      <div class="card-header">
        <img
          :src="$route.query.img"
          class="card-img-top"
          :alt="$route.query.img"
          style="width: 18rem"
        />
      </div>
      <p class="card-text">
        <span>{{ $route.query.tag }}</span>
      </p>
      <p class="card-text">
        <span> £{{ $route.query.price }}</span>
      </p>

      <div class="card-footer text-body-secondary">
        <router-link to="/merch" class="btn btn-primary">Back</router-link>
      </div>
    </div>
    >
    <router-link to="/cart"><button>view cart</button></router-link>
  </div>
  
</template>

<script>
export default {};
</script>

<style scoped></style>

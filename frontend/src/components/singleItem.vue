<template>
  <div class="single-view">
    <div class="ImgSingle">
      <img class="singleImg img-fluid" :src="$route.query.img" :alt="$route.query.img" loading="lazy" />
    </div>
        <div class="details">
          <h1 class="singleTitle">{{ $route.query.name }}</h1>
          <h3 class="singleTitle">R{{ $route.query.price }}</h3>
          <h5 class="singleTitle">{{ $route.query.tag }}</h5>
          <button class="contact-btn">Add to cart</button>
          <router-link class="deleter" to="/merch">Back</router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped></style>

<template>
  <div>
    <div class="ImgSingle">
      <img :src="$route.query.img" :alt="$route.query.img" loading="lazy" />
    </div>

    <div class="col">
      <div class="col">
        <div class="thumbnail-container">
          <img
            class="drift-demo-trigger"
            :data-zoom="$route.query.img"
            :src="$route.query.img"
          />
        </div>
      </div>

      <div class="col">
        <div class="details">
          <h1 class="singleTitle">{{ $route.query.name }}</h1>
          <p class="price">R{{ $route.query.price }}</p>
          <p class="tag">{{ $route.query.tag }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <div class="singImg">
      <div>
        <img
          :src="$route.query.img"
          class="singleImg img-fluid"
          :alt="$route.query.img"
          loading="lazy"
        />
      </div>
      <div>
        <router-link to="/merch" class="mainBack">Back</router-link>
      </div>
      <div class="info">
        <h2>{{ $route.query.name }}</h2>
        <h4>{{ $route.query.tag }}</h4>
        <h4>R{{ $route.query.price }}</h4>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {};
</script>

<style scoped></style>

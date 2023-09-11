<template>
  <div>
    <form class="d-flex" role="search">
      <input
        class="form-control me-2 searchbar"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="AddMerch" type="submit">Search</button>
    </form>
    <div class="sort">
      <button @click="SortName" class="price-sort">sort by name</button>
      <div class="btn-group">
        <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Posters</a></li>
          <li><a class="dropdown-item" href="#">Figurines</a></li>
          <li><a class="dropdown-item" href="#">Clothing</a></li>
          <li><a class="dropdown-item" href="#">Manga</a></li>
        </ul>
      </div>
      <button @click="SortPrice" class="price-sort">sort by price</button>
    </div>
    <div class="cartview">
      <button class="price-sort">
        View Cart<img
          class="cartImg"
          src="https://i.postimg.cc/bJSp61n3/download-removebg-preview-5.png"
          alt="cart"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    SortName() {
      this.$store.dispatch("FilterName")
    },
    SortPrice() {
      this.$store.dispatch("FilterPrice")
    },
  }
};
</script>

<style scoped></style>

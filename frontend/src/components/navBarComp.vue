<template>
  <div>
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid nav">
        <a class="navbar-brand" href="#">
          <img
            class="logo"
            src="https://i.postimg.cc/c4y2MkJw/d9260ceb4bccd08286f7ee416f4075a3-removebg-preview.png"
            alt="Logo"
            loading="lazy"
          />SenpaiOracle</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <router-link to="/home" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/merch" class="nav-link">Merchandise</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/checkout" class="nav-link">Checkout</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin" class="nav-link">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact Me</router-link>
            </li>
            <li>
              <router-link to="/singleU"><button class="log-btn">
                <img
                  class="loginimg"
                  src="https://i.postimg.cc/ncdhjwZd/pngtree-user-icon-isolated-on-abstract-background-png-image-5192004-removebg-preview.png"
                  alt="login"
                /></button
            ></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped></style>

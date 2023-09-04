import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./assets/CSS/style.css";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

createApp(App)
.use(store)
.use(css)
.use(router)
.mount("#app");

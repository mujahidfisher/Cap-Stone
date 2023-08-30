import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import css from "./assets/CSS/style.css"

createApp(App).use(store).use(css).use(router).mount('#app')

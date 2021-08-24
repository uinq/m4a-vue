import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide'

createApp(App).use(router).mount('#m4aVueApp')
createApp(App).use(VueSplide)

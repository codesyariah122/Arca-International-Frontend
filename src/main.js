import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// css framework bootstrap
import axios from 'axios'
import VueAxios from 'vue-axios'
import Toaster from '@meforma/vue-toaster';
import VueSweetalert2 from 'vue-sweetalert2'
import '@/assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

app.use(store).use(router).use(VueAxios, axios).use(VueSweetalert2).use(Toaster).mount('#app')

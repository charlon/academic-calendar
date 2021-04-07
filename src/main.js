import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 

// bootstrap 4 (standalone)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// tailwind
// import './index.css'

createApp(App).use(router).mount('#app')

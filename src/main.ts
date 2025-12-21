import './assets/css/main.css'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router)      // Router vor dem mount einbinden
app.mount('#app')    // App mounten

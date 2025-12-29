import './assets/css/main.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowsLeftRightToLine, faCoins, faHandHoldingDollar, faHandsHoldingChild, faHeartPulse, faShieldHalved, faVenus, faMars, faCaretUp} from '@fortawesome/free-solid-svg-icons'
import { animate, cubicBezier  } from 'animejs'


// Icons in die Library laden
library.add(faArrowsLeftRightToLine, faCoins, faHandHoldingDollar, faHandsHoldingChild, faHeartPulse, faShieldHalved, faVenus, faMars, faCaretUp)

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router)      // Router vor dem mount einbinden
app.mount('#app')    // App mounten

import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { i18n } from './i18n'
import 'flag-icons/css/flag-icons.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faGithub, faInstagram)

const app = createApp(App)

app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

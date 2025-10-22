import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { i18n } from './i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'

library.add(faLinkedin, faGithub, faEnvelope, faFolder)

const app = createApp(App)

app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

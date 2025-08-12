import App from './App.vue'
import { createApp } from 'vue'
import registerPlugins from './plugins'

import './assets/css/style.css'

const app = registerPlugins(createApp(App))

app.mount('#app')

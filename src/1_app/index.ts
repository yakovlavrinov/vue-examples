import { createApp } from 'vue'
import '../style.css'
import App from './App.vue'
import { router } from './providers/router'
import { pinia } from './providers/store'
import naive from 'naive-ui'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(naive)
app.mount('#app')

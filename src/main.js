import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uiComponens from './ui-componens'

const app = createApp(App)

uiComponens.map(item => app.component(item.name, item))
app.use(router)
app.use(store)
app.mount('#app')

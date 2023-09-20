import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
import vue from 'vue'
import vueRouter from 'vue-router'
import Home from '../views/Home.vue'

vue.use(vueRouter)

    const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about/',
        name: 'About',
        component: () => import('../views/About.vue')
    },
]

const router = new vueRouter({
    routes
})
export default router


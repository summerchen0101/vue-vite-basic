import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('./views/Login.vue'),
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('./views/Layout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('./views/Home.vue'),
      },
      {
        path: '/other',
        name: 'Other',
        component: () => import('./views/Other.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')

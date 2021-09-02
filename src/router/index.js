import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Works from '../views/Works.vue'
import WorksDetail1 from '../views/works/WorksDetail1.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/works/worksDetail1',
    name: 'WorksDetail',
    component: WorksDetail1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

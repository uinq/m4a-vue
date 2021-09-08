import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Works from '../views/Works.vue'
import WorksDetail1 from '../views/works/WorksDetail1.vue'
import WorksDetail2 from '../views/works/WorksDetail2.vue'
import WorksDetail3 from '../views/works/WorksDetail3.vue'
import WorksDetail4 from '../views/works/WorksDetail4.vue'
import WorksDetail5 from '../views/works/WorksDetail5.vue'

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
    name: 'WorksDetail1',
    component: WorksDetail1
  },
  {
    path: '/works/worksDetail2',
    name: 'WorksDetail2',
    component: WorksDetail2
  },
  {
    path: '/works/worksDetail3',
    name: 'WorksDetail3',
    component: WorksDetail3
  },
  {
    path: '/works/worksDetail4',
    name: 'WorksDetail4',
    component: WorksDetail4
  },
  {
    path: '/works/worksDetail5',
    name: 'WorksDetail5',
    component: WorksDetail5
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

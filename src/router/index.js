import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/products/Home.vue'
import Createproducts from '../views/products/Createproducts.vue'
import Editproducts from '../views/products/Editproducts.vue'
import Detailproducts from '../views/products/Detailproducts.vue'
import Creategroups from '../views/groups/Creategroups.vue'
import Editgroups from '../views/groups/Editgroups.vue'
import Groups from '../views/groups/Groups.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createproducts',
    name: 'Createproducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createproducts 
  },
  {
    path: '/editproducts/:id',
    name: 'Editproducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editproducts
  },
  {
    path: '/detailproducts/:id',
    name: 'Detailproducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailproducts
  },
  {
    path: '/creategroups/:id',
    name: 'Creategroups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creategroups
  },
  {
    path: '/editgroups/:id',
    name: 'Editgroups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editgroups
  },
  {
    path: '/groups/:id',
    name: 'Groups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Groups
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

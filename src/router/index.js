import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NoteView from '../views/NoteView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/note/:id',
    name: 'NoteView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NoteView
  }
  // {
  //   path: '/:note.title',
  //   name: 'Note',
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Notes from "../components/Notes.vue";

const routes = [
  {
    path: '/',
    name: 'Notes',
    component: Notes
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

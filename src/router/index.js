import { createRouter, createWebHistory } from 'vue-router'
import Projects from "@/components/pages/Projects.vue"
import AddProject from "@/components/pages/AddProject.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: Projects
    },
    {
      path: '/add-project',
      name: 'add-project',
      component: AddProject
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

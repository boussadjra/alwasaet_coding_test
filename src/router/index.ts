import { createRouter, createWebHistory } from 'vue-router'

import Archive from '@/views/archive/index.vue'
import ArchiveIcon from '@/components/icons/ArchiveIcon.vue'
import Home from '@/views/home.vue'
import Inbox from '@/views/inbox/index.vue'
import InboxIcon from '@/components/icons/InboxIcon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,

    },
    {
      path: '/inbox',
      name: 'inbox',
      component: Inbox,
      meta: {
        layout: 'email-layout',
        count: 0,
        icon: InboxIcon,

      },
    },
    {
      path: '/archive',
      name: 'archive',
      component: Archive,
      meta: {
        layout: 'email-layout',
        count: 0,
        icon: ArchiveIcon,
      },
    },

  ]
})

export default router

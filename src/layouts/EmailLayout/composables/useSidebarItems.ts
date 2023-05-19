import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'

import { computed } from 'vue';
import { useArchiveStore } from '@/stores/archive'
import { useInboxStore } from '@/stores/inbox'

export function useSidebarItems() {

    const inboxStore = useInboxStore()
    const archiveStore = useArchiveStore()

    const router = useRouter()

    function getCount(route: RouteRecordRaw) {
        if (route.name === 'inbox') {
            return inboxStore.messages.length
        }
        if (route.name === 'archive') {
            return archiveStore.archivedMessages.length
        }
        return 0
    }
    const routes = computed(() => router.getRoutes().map((route) => {
        const meta = route.meta
        return {
            ...route,
            meta: {
                ...meta,
                icon: meta.icon,
                count: getCount(route)
            }
        }
    }))
    const route = useRoute()

    const activeItemPath = computed(() => route.path)

    const isActive = (item: RouteRecordRaw) => {
        return {
            'sidebar__item--active': activeItemPath.value === item.path
        }
    }

    return {
        items: routes,
        isActive
    }
}
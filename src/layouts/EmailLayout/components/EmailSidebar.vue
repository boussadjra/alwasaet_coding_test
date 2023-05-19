<script setup lang='ts'>
import { RouterLink } from 'vue-router';
import { useSidebarItems } from '../composables/useSidebarItems';
import logo from '@/assets/imgs/logo.png'
import AppButton from '@/components/inputs/AppButton.vue';
import LogoutIcon from '@/components/icons/LogoutIcon.vue';
const { items, isActive } = useSidebarItems();

</script>
<template>
    <aside class="email-layout__sidebar">
        <div class="email-layout__logo">
            <img :src="logo" alt="my email service logo" />
        </div>
        <nav>
            <ul>
                <li v-for="item in items" :key="item.path">
                    <RouterLink :to="item.path" class="sidebar__item" :class="isActive(item)">
                        <component :is="item.meta.icon" class="sidebar__item__icon" />
                        <span class="sidebar__item__title">{{ item.name }}</span>
                        <span class="sidebar__item__meta">{{ item.meta.count }}</span>
                    </RouterLink>
                </li>
            </ul>
        </nav>
        <div class="email-layout__logout">
            <AppButton variant="text">
                <template #prepend>
                    <LogoutIcon />
                </template>
                Logout
            </AppButton>

        </div>
    </aside>
</template>


<style scoped>
.email-layout__logout {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 100%;
    text-align: center;

}
</style>
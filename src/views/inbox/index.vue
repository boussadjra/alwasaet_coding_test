<script setup lang='ts'>

import AppCheckbox from '@/components/inputs/AppCheckbox.vue';
import AppDrawer from '@/components/navigation/AppDrawer.vue';
import InboxActions from './components/InboxActions.vue';
import List from '@/components/app/list/List.vue';
import AppSpinner from '@/components/app/AppSpinner.vue';
import { useInbox } from './composables/useInbox';
import { ref } from 'vue';
import type { Message } from '@/api/inbox';
import { useSelectAll } from '@/composables/useSelectAll';

const {
    messages,
    markAsRead,
    archive,
    openMessage,
    currentOpenMessage,
    selectedMessages,
} = useInbox();
const {
    selectAll,
    selectAllLabel,
    indeterminate,
} = useSelectAll(messages, selectedMessages)

const showDrawer = ref(false)
function handleMessageClick(message: Message) {
    openMessage(message)
    showDrawer.value = true
}
</script>
<template>
    <main class="main">
        <div class="main__header">
            <AppCheckbox :label="selectAllLabel" v-model="selectAll" :indeterminate="indeterminate" />
            <div class="main__header__actions" v-show="selectedMessages.length > 0">
                <InboxActions @mark-as-read="markAsRead" @archive="archive" />
            </div>
        </div>
        <div v-if="messages.length === 0" class="spinner__wrapper">
            <AppSpinner />
        </div>

        <List v-else :items="messages" @item-click="handleMessageClick" item-key="id">
            <template #item="{ item }">
                <div class="message" :class="{ 'message--read': item.read }">
                    <AppCheckbox :value="item" v-model="selectedMessages" />
                    <span>
                        {{ item.subject }}
                    </span>
                </div>
            </template>
        </List>

        <AppDrawer v-model="showDrawer">
            <template #actions>
                <InboxActions @markAsRead="markAsRead" @archive="archive" />
            </template>
            <template #title>
                {{ currentOpenMessage?.subject }}
            </template>
            <template #body>
                {{ currentOpenMessage?.body }}
            </template>
        </AppDrawer>

    </main>
</template>


<style scoped>
.main {
    font-size: 14px;
    color: black;
    font-weight: 600;
}

.main__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    border-bottom: 1px solid #ebebeb;
}

.main__header__actions {
    display: flex;
    align-items: center;
}

.message {
    display: flex;
    align-items: center;

}

.message--read {
    font-weight: 400;
    opacity: 0.5;
}

.spinner__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
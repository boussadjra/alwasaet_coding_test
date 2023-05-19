import { computed, ref } from 'vue'

import type { Message } from '@/api/inbox';
import { useArchiveStore } from '@/stores/archive';
import { useInboxStore } from '@/stores/inbox'

export function useInbox() {
    const inboxStore = useInboxStore()

    const archiveStore = useArchiveStore()

    inboxStore.loadMessages()

    const messages = computed(() => inboxStore.messages)


    const currentOpenMessage = ref<Message | null>(null)

    const selectedMessages = ref<Message[]>([])






    const markAsRead = () => {
        selectedMessages.value.forEach((message) => {
            message.read = true
        })
    }

    const archive = () => {
        selectedMessages.value.forEach((message) => {
            archiveStore.archive(message)
            inboxStore.remove(message.id)
        })
    }

    const openMessage = (message: Message) => {
        currentOpenMessage.value = message
        selectedMessages.value = [message]

    }

    return {
        messages,
        markAsRead,
        archive,
        openMessage,
        currentOpenMessage,
        selectedMessages,
    }
}
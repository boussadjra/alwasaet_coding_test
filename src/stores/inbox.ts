import { computed, ref } from 'vue'

import type { Message } from '@/api/inbox'
import { defineStore } from 'pinia'
import { fetchMessages } from '@/api/inbox'

export const useInboxStore = defineStore('inbox', () => {
    const messages = ref<Message[]>([])
    const unreadCount = computed(() => messages.value.filter(message => !message.read).length)

    function markAsRead(id: number) {
        const message = messages.value.find(message => message.id === id)
        if (message) {
            message.read = true
        }
    }

    function loadMessages() {
        fetchMessages().then((data) => {
            messages.value = data


        })
    }

    function remove(id: number) {
        const message = messages.value.find(message => message.id === id)
        if (message) {
            messages.value.splice(messages.value.indexOf(message), 1)
        }
    }

    return { messages, unreadCount, markAsRead, loadMessages, remove }
})

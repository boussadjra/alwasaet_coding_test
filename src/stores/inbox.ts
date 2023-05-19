import { Message, fetchMessages } from '@/api/inbox'
import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

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

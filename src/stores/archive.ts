import type { Message, } from '@/api/inbox'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useArchiveStore = defineStore('archive', () => {
    const archivedMessages = ref<Message[]>([])

    function archive(message: Message) {
        if (message) {
            archivedMessages.value.push(message)
        }
    }

    function unarchive(id: number) {
        const message = archivedMessages.value.find(message => message.id === id)
        if (message) {
            archivedMessages.value.push(message)
        }
    }

    return { archivedMessages, archive, unarchive }
})



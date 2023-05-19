<script setup lang='ts'>

import EnvelopeOpenIcon from '@/components/icons/EnvelopeOpenIcon.vue';
import AppButton from '@/components/inputs/AppButton.vue';
import TrashIcon from '@/components/icons/TrashIcon.vue';
import { useKeyboardEventListener } from '@/composables/useKeyboardEventListener';

const emit = defineEmits(['mark-as-read', 'archive'])

const markAsRead = () => {
    emit('mark-as-read')
}

const archive = () => {
    emit('archive')
}

function onkeyup(event: KeyboardEvent) {
    if (event.key === 'r') {
        markAsRead()
    } else if (event.key === 'a') {
        archive()
    }
}

useKeyboardEventListener('keyup', onkeyup)

</script>
<template>
    <div class="inbox__actions">
        <AppButton variant="text" @click="markAsRead">
            <template #prepend>
                <EnvelopeOpenIcon />
            </template>
            Mark as Read (r)
        </AppButton>
        <AppButton variant="text" @click="archive">
            <template #prepend>
                <TrashIcon />
            </template>
            Archive (a)
        </AppButton>
    </div>
</template>


<style scoped>
.inbox__actions {
    display: flex;
}
</style>
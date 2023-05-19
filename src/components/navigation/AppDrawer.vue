<script setup lang='ts'>
import CloseIcon from '../icons/CloseIcon.vue';
import AppButton from '../inputs/AppButton.vue';
import { useKeyboardEventListener } from '@/composables/useKeyboardEventListener';
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
    emit('update:modelValue', false)
}

function onkeyup(event: KeyboardEvent) {
    if (event.key === 'Escape') {
        close()
    }
}
useKeyboardEventListener('keyup', onkeyup)


</script>
<template>
    <Teleport to="body">
        <Transition name="drawer-slide">
            <div v-if="modelValue" class="drawer">
                <div class="drawer__overlay" @click="close"></div>
                <div class="drawer__content">
                    <div class="drawer__top">
                        <AppButton class="drawer__close" @click="close" variant="text">
                            <template #prepend>
                                <CloseIcon />
                            </template>
                            Close (Esc)
                        </AppButton>

                        <div class="drawer__actions">
                            <slot name="actions" />
                        </div>

                    </div>
                    <div class="drawer__header">
                        <h2 class="drawer__title">
                            <slot name="title"></slot>
                        </h2>

                    </div>
                    <div class="drawer__body">
                        <p>
                            <slot name="body"></slot>
                        </p>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>


<style scoped>
.drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 60%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
}

.drawer__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
}

.drawer__content {
    position: relative;
    height: 100%;
    overflow: auto;
    background-color: white;
    padding: 32px;

}

.drawer__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
}



.drawer__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.drawer__title {
    font-size: 20px;
    font-weight: 600;
    color: #121829;
}

.drawer__close {
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.drawer__body {
    font-size: 14px;
    color: #4B5563;

}

.drawer-slide-enter-active {
    animation: drawer-slide-in 0.3s ease-out forwards;
}

.drawer-slide-leave-active {
    animation: drawer-slide-out 0.3s ease-out forwards;
}

@keyframes drawer-slide-in {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
}

@keyframes drawer-slide-out {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100%);
    }
}
</style>
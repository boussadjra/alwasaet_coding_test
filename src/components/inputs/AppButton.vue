<script setup lang='ts'>
import { computed } from 'vue'
const props = defineProps({
    variant: {
        type: String,
        default: 'primary'

    }
})

const classes = computed(() => {
    return [
        'app-button',
        `app-button--${props.variant}`
    ]
})
</script>
<template>
    <!-- button with prepend, default and append slot using BEM -->
    <button :class="classes">
        <span class="app-button__prepend">
            <slot name="prepend"></slot>
        </span>
        <span class="app-button__content">
            <slot></slot>
        </span>
        <span class="app-button__append">
            <slot name="append"></slot>
        </span>
    </button>
</template>


<style scoped>
.app-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 16px;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    background-color: #fff;
    color: #4B5563;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.app-button--primary {
    background-color: #0968FE;
    color: #fff;
    border-color: #0968FE;
}

.app-button--text {
    background-color: transparent;
    border-color: transparent;
}

.app-button__content {
    margin-inline: 12px;
    display: flex;
    align-items: center;
}
</style>
<script setup lang="ts">
import { useAttrs, computed, useSlots } from 'vue';
import CheckIcon from '../icons/CheckIcon.vue';

import type { PropType } from 'vue';
import MinusIcon from '../icons/MinusIcon.vue';

defineOptions({
    name: "app-checkbox",
    inheritAttrs: false,

})
const attrs = useAttrs()

const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    id: {
        type: String,
        default: '',
    },
    modelValue: {
        type: [Boolean, Array] as PropType<boolean | Array<any>>,
        default: false,
    },

    disabled: {
        type: Boolean,
        default: false,
    },
    value: {
        type: [String, Number, Boolean, Object] as PropType<string | number | boolean | object>,
        default: true,
    },
    indeterminate: {
        type: Boolean,
        default: false,
    }
})

const id = computed(() => attrs.id ?? Math.random().toString(36).substr(2, 9))
const emit = defineEmits(['update:modelValue'])
const data = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

const classes = computed(() => [
    'app-checkbox',
    {
        'app-checkbox--disabled': props.disabled,
        'app-checkbox--checked': data.value
    },

])
const wrapperClasses = computed(() => [
    'app-checkbox__wrapper',
    {
        'app-checkbox__wrapper--disabled': props.disabled,
        'app-checkbox__wrapper--checked': data.value
    },
])

const labelClasses = computed(() => [
    'app-checkbox__label ',
    {
        'app-checkbox__label--disabled': props.disabled,
        'app-checkbox__label--checked': data.value
    },
])

const slots = useSlots()

function noop() {

}
</script>

<template>
    <label :for="id" :class="labelClasses" @click.stop="noop">
        <input v-bind="attrs" :id="id" v-model="data" :value="value" type="checkbox" class="app-checkbox  "
            :class="classes">
        <div :class="wrapperClasses" v-if="!slots.checked || !slots.unchecked">
            <div class="icon">
                <MinusIcon v-if="indeterminate" />
                <CheckIcon v-else />
            </div>
        </div>
        <span v-if="slots.checked" class="slot slot--checked">
            <slot name="checked" />
        </span>
        <span v-if="slots.unchecked" class="slot slot--unchecked ">
            <slot name="unchecked" />
        </span>
        <span class="app-checkbox__text">
            <slot>
                {{ label }}
            </slot>
        </span>
    </label>
</template>

<style scoped>
.app-checkbox {
    opacity: 0.5;
    width: 0;
}

.app-checkbox__label {
    cursor: pointer;
    display: flex;
    align-items: center;
}



.app-checkbox__label--disabled {
    cursor: not-allowed;
}


.app-checkbox__wrapper {
    width: 18px;
    height: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 2px;
    justify-content: center;
    padding: 2px;
    border-radius: 5px;
    box-sizing: content-box;
    border: 1px solid #CAD6E4;
}

.app-checkbox__text {
    margin-left: 12px;
}

.icon {
    width: 16px;
    height: 16px;
    border-radius: 0.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    transform: scale(0);
    opacity: 0;
}



.app-checkbox:checked+.app-checkbox__wrapper>.icon {
    transform: scale(1);
    opacity: 1;
    border-color: white;
}

.app-checkbox:checked+.app-checkbox__wrapper--default>.icon {
    border-color: #CAD6E4;
}



.app-checkbox__wrapper {
    border-color: #CAD6E4;
}

.app-checkbox:checked+.app-checkbox__wrapper {
    background-color: #0968FE;
}


.slot--checked,
.slot--unchecked {
    display: flex;
    align-items: center;
}


.app-checkbox:checked~.slot--unchecked {
    display: none;
}

.app-checkbox:not(:checked)~.slot--checked {
    display: none;
}
</style>

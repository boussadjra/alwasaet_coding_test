import { computed, ref, watch } from "vue";

import type { Ref } from 'vue'

export function useSelectAll<T extends {}>(items: Ref<T[]>, selectedItems: Ref<T[]>) {
    const selectAll = ref(false)
    watch(selectAll, (value) => {
        if (value) {
            selectedItems.value = items.value
        } else {
            selectedItems.value = []
        }
    })

    const selectAllLabel = computed(() => `Email Selected (${selectedItems.value.length})`)


    const indeterminate = computed(() => {
        return selectedItems.value.length > 0 && selectedItems.value.length < items.value.length
    })

    return {
        selectAll,
        selectAllLabel,
        indeterminate,
    }

}
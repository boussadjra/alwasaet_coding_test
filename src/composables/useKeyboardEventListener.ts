import { onMounted, onUnmounted } from 'vue'
export function useKeyboardEventListener(event: 'keyup' | 'keypress' | 'keydown', listener: (ev: KeyboardEvent) => void) {

    const handler = (e: KeyboardEvent) => {
        listener(e)
    }

    const add = () => {

        document.addEventListener(event, handler)
    }

    const remove = () => {
        document.removeEventListener(event, handler)
    }

    onMounted(() => {
        add()
    })

    onUnmounted(() => {
        remove()
    })

}
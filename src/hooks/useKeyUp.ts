import { onMounted, onUnmounted, ref } from 'vue'
const useKeyPress = (keyCode: string) => {
  const keyStatus = ref(false)
  const keyUpTap = (e: KeyboardEvent) => {
    if (keyCode === e.key) {
      keyStatus.value = false
    }
  }
  const keyDwonTap = (e: KeyboardEvent) => {
    if (keyCode === e.key) {
      keyStatus.value = true
    }
  }
  onMounted(() => {
    document.addEventListener('keyup', keyUpTap)
    document.addEventListener('keydown', keyDwonTap)
  })
  onUnmounted(() => {
    document.removeEventListener('keyup', keyUpTap)
    document.removeEventListener('keydown', keyDwonTap)
  })
  return keyStatus
}
export default useKeyPress

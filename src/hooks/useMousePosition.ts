import { ref, onMounted, onUnmounted, reactive } from 'vue'
export default function useMousePosition () {
  const position = reactive({
    x: 0,
    y: 0
  })
  // 鼠标事件
  const updateMouse = (e: MouseEvent) => {
    position.x = e.pageX
    position.y = e.pageY
  }
  onMounted(() => {
    document.addEventListener('click', updateMouse)
  })
  onUnmounted(() => {
    document.removeEventListener('click', updateMouse)
  })
  return position
}

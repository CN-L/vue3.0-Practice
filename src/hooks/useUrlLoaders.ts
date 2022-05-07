import { ref } from 'vue'
import axios from 'axios'
export default function useUrlLoader<T> (url: string) {
  const result = ref<null | T>(null)
  const loading = ref(true)
  const error1 = ref(null)
  axios.get(url).then((res) => {
    result.value = res.data
    loading.value = false
  }).catch((error) => {
    error1.value = error
    loading.value = false
  })
  return {
    result,
    loading,
    error1
  }
}

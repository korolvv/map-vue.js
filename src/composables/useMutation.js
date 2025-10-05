import { ref } from 'vue'

export const useMutation = ({ mutationFn, onSuccess, onError }) => {
  const data = ref()
  const isLoading = ref(false)
  const error = ref(null)

  const mutation = async (...args) => {
    isLoading.value = true
    try {
      data.value = await mutationFn(...args)
      error.value = null
      onSuccess?.(data)
    } catch (err) {
      onError?.(err)
      error.value = err
    } finally {
      isLoading.value = false
    }
  }
  return { data, isLoading, error, mutation }
}

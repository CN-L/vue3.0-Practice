<template>
  <div class="msg">
    {{user.name}}
  </div>
  <button @click="onChange">发送</button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
interface Muser {
  name: string,
  age: number
}
interface Ievent {
  (e: 'change', age: number): void
}
const props = defineProps<{user: Muser}>()
const emit = defineEmits<Ievent>()
const onChange = () => {
  emit('change', props.user.age)
}
</script>
<style scoped>

</style>

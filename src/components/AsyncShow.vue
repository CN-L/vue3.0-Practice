<template>
  <div>{{result}}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve({
          result: 29
        })
      }, 3000)
    })
  }
})
</script>

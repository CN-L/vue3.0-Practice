<template>
{{roaData}}
  <img :src="roaData && roaData.message" alt="">
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  name: 'DogShow',
  async setup () {
    const { data: roaData } = await axios.get('https://dog.ceo/api/breeds8/image/random/image')
    return {
      roaData
    }
  }
})
</script>
